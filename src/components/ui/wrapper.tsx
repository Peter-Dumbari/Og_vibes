import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; // Allows any React component or text as children
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
