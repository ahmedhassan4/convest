"use client`"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Selekton = ({count = 5}: {count?: number}) => {
  return <Skeleton count={count} />
};
export default Selekton;
