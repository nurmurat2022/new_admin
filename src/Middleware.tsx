import React, { ReactNode } from "react";
import NavSideBar from "./components/NavSideBar";

type MiddlewareProps = {
  withLayout?: boolean;
  children: ReactNode;
};

const Middleware = (props: MiddlewareProps) => {
  const { children, withLayout = true } = props;
  
  return (
    <>
      {withLayout ? (
        <>
          <NavSideBar />
          {children}
        </>
      ) : (
        { children }
      )}
    </>
  );
};

export default Middleware;
