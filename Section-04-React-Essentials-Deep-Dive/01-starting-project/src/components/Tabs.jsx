import React from "react";

const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
//   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
