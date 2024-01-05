import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taonime List",
  description: "Anime List by Tao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          /* navbar in layout */
          <div>
            <h1>INI AREA NAVBAR</h1>
          </div>
        }
        {children}
      </body>
    </html>
  );
}
