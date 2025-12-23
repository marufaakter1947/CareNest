import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "CareNest",
  description: "Trusted Baby Sitting & Elderly Care Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
