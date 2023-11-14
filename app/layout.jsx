import { Providers } from "./redux/provider";

import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Naimas Recipe",
  description: "Welcome to Naimas Recipe, your culinary destination for mouthwatering recipes, cooking inspiration, and kitchen adventures ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-secondary min-h-screen flex flex-col`}>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
