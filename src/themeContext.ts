import React from "react";

export const ThemeContext = React.createContext(["light", () => { /*noop*/ }] as [string, (e: string) => void]);