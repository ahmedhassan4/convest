import Image from "next/image";
import { Text, Title } from "rizzui";

const NoDataCom = ({ name = "data" }: { name?: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/no-data.svg" width={466} height={297} alt="no-data" />
      <Title as="h6" className=" text-xl mt-6">
        Nothing here yet.
      </Title>
      <Text
        as="p"
        className="text-gray-500 mt-2">{`No ${name} has been created so far`}</Text>
    </div>
  );
};
export default NoDataCom;
