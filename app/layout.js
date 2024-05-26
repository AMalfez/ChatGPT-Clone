import "./globals.css";
// import { DarkModeTheme } from "@/components/Home/DarkModeTheme";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
// import GetUser from "@/utils/GetUser";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ChatGPT",
  description: "A ChatGPT clone from nextjs ",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <DarkModeTheme
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
            {children}
          {/* </DarkModeTheme> */}
      </body>
    </html>
  );
}
