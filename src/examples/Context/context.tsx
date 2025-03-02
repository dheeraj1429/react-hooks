import { createContext, useContext, useState } from "react";

type ContextProviderType = {
  children: React.ReactElement;
};

type MyContextData = {
  name: string;
  age: number;
  place: string;
  changeName: (updatedName: string) => void;
};

type MyContextDataWithoutMethods = Omit<MyContextData, "changeName">;

const MyContext = createContext<MyContextData | null>(null);

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [data, setData] = useState<MyContextDataWithoutMethods>({
    name: "MyContext",
    age: 20,
    place: "place",
  });

  const changeNameHandler = (updatedName: string) => {
    setData({ ...data, name: updatedName });
  };

  return (
    <MyContext.Provider value={{ ...data, changeName: changeNameHandler }}>
      {children}
    </MyContext.Provider>
  );
};

export const useContextHook = (): MyContextData => {
  const context = useContext(MyContext);
  if (!context) throw new Error("Context provider not available");
  return context;
};
