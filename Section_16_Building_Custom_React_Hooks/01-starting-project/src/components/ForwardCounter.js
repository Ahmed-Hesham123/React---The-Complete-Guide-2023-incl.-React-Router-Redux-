// import { useState, useEffect } from "react";

import Card from "./Card";
import UseCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = UseCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
