// import { useState, useEffect } from 'react';

import Card from "./Card";
import UseCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const counter = UseCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
