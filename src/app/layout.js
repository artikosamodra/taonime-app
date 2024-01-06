import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utilities/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taonime List",
  description: "Anime List by Tao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
