"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Audience = "company" | "nomad";

type AudienceState = {
  audience: Audience;
  setAudience: (a: Audience) => void;
};

const AudienceCtx = createContext<AudienceState>({
  audience: "company",
  setAudience: () => {},
});

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("company");
  return (
    <AudienceCtx.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceCtx.Provider>
  );
}

export function useAudience() {
  return useContext(AudienceCtx);
}
