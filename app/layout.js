import { Work_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Shoaib Muhammad | Full Stack Web Developer",
  description:
    "I am a dedicated Full Stack Web Developer specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience in building dynamic web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
