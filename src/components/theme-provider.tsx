import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemesProviderProps,
} from "next-themes";

/**
 * A wrapper around next-themes ThemeProvider.
 * Ensures children are typed correctly and all props are validated.
 */
export function ThemeProvider({
  children,
  ...props
}: NextThemesProviderProps & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
