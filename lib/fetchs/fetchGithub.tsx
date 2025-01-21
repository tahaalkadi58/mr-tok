// RepoProvider.tsx
import React, { ReactNode } from "react";
import { RepoProvider as Provider } from "../contexts/GithubContext";

async function fetchRepos(perPage: number) {
  const url = `https://api.github.com/users/tahaalkadi58/repos?per_page=${perPage}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  return response.json();
}

export const RepoProvider = async ({
  children,
  perPage = 5,
}: {
  children: ReactNode;
  perPage?: number;
}) => {
  let repos = [];
  let error: string | null = null;

  try {
    repos = await fetchRepos(perPage);
  } catch (err: any) {
    error = err.message;
  }

  return (
    <>
      <Provider repos={repos} error={error as string}>
        {children}
      </Provider>
    </>
  );
};
