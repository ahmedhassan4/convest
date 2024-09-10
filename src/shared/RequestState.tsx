"use client";
import React from "react";
// import { Loader } from "rizzui";
import NoDataCom from "./NoDataCom";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/shared/loader"), {
  ssr: false,
});

//lazy

type ListWrapperProps = {
  children: (option: { data: any[] }) => React.ReactNode;
  isLoading?: boolean;
  loadingIndicator?: React.ReactNode | string | React.ReactElement;
  isError?: boolean;
  error?: any | undefined;
  data?: any;
  isFetching?: boolean;
  emptyMessage?: string;
};

const RequestState = ({
  children,
  isLoading,
  data,
  isFetching,
}: ListWrapperProps) => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    if (isLoading) {
      return (
        <div className="grid h-32 flex-grow place-content-center items-center">
          <Loader />
        </div>
      );
    }
  } else null;

  return isClient ? (
    <div className={`relative mt-5 ${isFetching ? " opacity-50" : ""}`}>
      {data && data?.length === 0 ? <NoDataCom /> : data && children({ data })}
    </div>
  ) : null;
};

export default RequestState;
