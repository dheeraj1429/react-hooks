import { createContext, useContext } from "react";

const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{ name: "Demo context object", age: 20 }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};
