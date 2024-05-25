"use client"

import * as React from "react"
import { NextThemesProvider } from "next-themes"
// import { ThemeProviderProps } from "next-themes/dist/types"

export function DarkModeTheme({children,props}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
