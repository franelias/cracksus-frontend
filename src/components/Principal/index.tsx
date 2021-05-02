import React from "react";
import { useTest } from "../../hooks/useTest";

const Principal = () => {
  const { data } = useTest();

  return <div>{data}</div>;
};

export default Principal;
