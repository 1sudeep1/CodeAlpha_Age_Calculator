import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeAlpha_Age_Calculator",
  description: "You can check your age providing your date of birth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
