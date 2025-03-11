import { createContext, useContext, useState } from "react";

const MyContext = createContext(null);

// export const MyContextProvider = ({ children }) => {
//   return (
//     <MyContext.Provider value={{ name: "Demo context object", age: 20 }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

export const MyContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(10);

  const handlerChangeCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <MyContext.Provider value={{ counter, handlerChangeCounter }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};
