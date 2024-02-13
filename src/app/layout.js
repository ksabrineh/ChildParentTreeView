import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "treeview by sabrineh",
  description: "Generated for child parent treeview",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center">{children}</body>
    </html>
  );
}
