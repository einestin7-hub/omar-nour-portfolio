import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"Omar Nour | Full-Stack Software Engineer",description:"Healthcare, retail, HR, safety and operational software portfolio by Omar Nour."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}