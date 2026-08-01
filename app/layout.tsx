import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kouponly — Good plans, better prices",
  description: "A light-mode mobile savings and local discovery experience for Kouponly.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
