/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person,setperson] = useState()

  return (
    <LoginContext.Provider value={{ account, setAccount,person,setperson }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
