"use client";
import { createContext, useState } from "react";

interface CourseFileContextType {
  files: any;
  setFiles: React.Dispatch<React.SetStateAction<any>>;
}

const defaultValue: CourseFileContextType = {
  files: {},
  setFiles: () => {},
};
export const FilesContext =
  createContext<CourseFileContextType>(defaultValue);

const FilesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [files, setFiles] = useState({});
  console.log("files", files);
  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
};

export default FilesContextProvider;
