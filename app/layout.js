import "./globals.css";
import './fanta.css'
import Head from "./head";
import AuthProvider from "@/context/AuthContext";

export const metadata = {
  title: "SHYLINOTE | Easy Breezy Notetaking",
  description:"ShyliNote – The simplest markdown notes app powered by Next.js 15 and Firebase.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body >
          <div id="app">{children}</div>
          <div id="portal"></div>

        </body>
      </AuthProvider>
    </html>
  );
}
