"use client";
import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";

export const RepoContext = createContext<{
  repos: any[];
  loading: boolean;
  error: string;
}>({
  repos: [],
  loading: true,
  error: "",
});

export const RepoProvider: FunctionComponent<{
  error: string;
  repos: any[];
  children: ReactNode;
}> = ({ children, error, repos }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [repos]);

  return (
    <RepoContext.Provider
      value={{
        repos,
        loading,
        error: error as string,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
};
