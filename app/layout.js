// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import TextUsBtn from "@/components/home/hero-section/text-us-btn";
import WhatsappPopUp from "@/components/home/hero-section/whatsapp-pop-up";
import SidebarForm from "@/components/common/sidebar-form";
// config.autoAddCss = false;

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Codelab Enhanced Features",
  description: "CodeLab.pk - Premier IT solutions institute offering comprehensive training in software development, web technologies, and digital skills. Join our hands-on learning environment to build your tech career.",
  icons: {
    icon: '/images/logo/codelab-logo-black.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      // ${geistSans.variable} ${geistMono.variable} 
      >
        <Header />
        {/* <TextUsBtn /> */}
        <WhatsappPopUp />
        <SidebarForm />
        {children}
        <Footer />
      </body>
    </html>
  );
}
