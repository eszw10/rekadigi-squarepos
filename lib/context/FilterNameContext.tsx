"use client";

import { createContext, useContext, useMemo, useState } from "react";

type FilterNameContextType = { name: string; setName: (name: string) => void };
const FilterNameContext = createContext<FilterNameContextType | "">("");

function FilterNameProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [name, setName] = useState("");
  return (
    <FilterNameContext.Provider
      value={useMemo(() => ({ name, setName }), [name])}
    >
      {children}
    </FilterNameContext.Provider>
  );
}

export function useFilterName() {
  const context = useContext(FilterNameContext);
  if (!context) {
    throw new Error("useFilterName must be used within a FilterNameProvider");
  }
  return context;
}

export default FilterNameProvider;
