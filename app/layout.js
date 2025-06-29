import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
<<<<<<< HEAD
  title: "Portfolio of Hakan Gul - Senior Software Developer in Test Engineer",
  description:
    "This is the portfolio of Hakan Gul. I am a Senior Software Developer in Test Engineer with 4+ years of experience in QA automation, test frameworks, and quality assurance. I specialize in Java, C#, Selenium, and modern CI/CD practices. Currently leading QA automation initiatives at Nesine.com.",
=======
  title: "Portfolio of HAKAN GUL - Software Developer",
  description:
    "This is the portfolio of HAKAN GUL. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
>>>>>>> be1f8d6 (Update personal information to reflect Hakan Gul's details in portfolio)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
