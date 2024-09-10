"use client";

import Image from "next/image";
import isEmpty from "lodash/isEmpty";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PiTrashBold } from "react-icons/pi";
import { Text, FieldError } from "rizzui";
import cn from "@/utils/class-names";
import UploadIcon from "@/componnets/shape/upload";

interface UploadZoneProps {
  label?: string;
  name: string;
  getValues: any;
  setValue: any;
  className?: string;
  error?: string;
  preview?: string;
}

interface PreviewFile extends File {
  preview: string;
}

export default function UploadZone({
  label,
  name,
  className,
  getValues,
  setValue,
  error,
  preview,
}: UploadZoneProps) {
  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [previewState, setpreviewState] = useState<string>("");
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      console.log("newFiles >>>>>>>>>", newFiles);
      setFiles(newFiles);
      setValue(name, newFiles[0]); // Set the first file directly in the form using setValue
      console.log("newFiles >>>>>>>>>", newFiles);
    },
    [setValue, name]
  );

  useEffect(() => {
    if (preview) {
      setpreviewState(preview);
    }
  }, [preview]);

  const handleRemoveFile = () => {
    setFiles([]);
    setValue(name, null); // Clear the value when the file is removed
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Restrict to single file upload
  });

  return (
    <div className={cn("grid @container", className)}>
      {label && (
        <span className="mb-1.5 block font-semibold text-gray-900">
          {label}
        </span>
      )}
      <div
        className={cn(
          "rounded-md border-[1.8px]",
          !isEmpty(files) && "flex items-center justify-between @xl:pr-6"
        )}>
        <div
          {...getRootProps()}
          className={cn(
            "flex cursor-pointer items-center gap-4 px-6 py-5 transition-all duration-300",
            isEmpty(files)
              ? "justify-center"
              : "flex-grow justify-center @xl:justify-start"
          )}>
          <input {...getInputProps()} />
          <UploadIcon className="h-12 w-12" />
          <Text className="text-base font-medium">Drop or select file</Text>
        </div>
      </div>

      {!isEmpty(files) ? (
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]">
          {files.map((file, index) => (
            <div key={index} className={cn("relative")}>
              <figure className="group relative h-40 rounded-md bg-gray-50">
                <Image
                  fill
                  src={file.preview}
                  alt={file.name}
                  className="transform rounded-md object-contain"
                />
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="absolute right-0 top-0 rounded-full bg-gray-700/70 p-1.5 opacity-20 transition duration-300 hover:bg-red-dark group-hover:opacity-100">
                  <PiTrashBold className="text-white" />
                </button>
              </figure>
              <div className="mt-1 text-xs">
                <p className="break-words font-medium text-gray-700">
                  {file.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        previewState && (
          <div className={cn("relative")}>
            <figure className="group relative h-40 rounded-md bg-gray-50">
              <Image
                fill
                src={previewState || ""}
                alt={""}
                className="transform rounded-md object-contain"
              />
              <button
                type="button"
                onClick={() => setpreviewState("")}
                className="absolute right-0 top-0 rounded-full bg-gray-700/70 p-1.5 opacity-20 transition duration-300 hover:bg-red-dark group-hover:opacity-100">
                <PiTrashBold className="text-white" />
              </button>
            </figure>
          </div>
        )
      )}

      {error && <FieldError error={error} />}
    </div>
  );
}
