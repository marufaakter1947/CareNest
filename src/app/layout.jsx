import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { AuthProvider } from "@/context/AuthContext";
// import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CareNest",
  description: "Trusted Baby Sitting & Elderly Care Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <Navbar />
        <main>{children}</main>
        <Toaster></Toaster>
       

        </AuthProvider>
         {/* console.log( Navbar); */}
      </body>
    </html>
  );
}
