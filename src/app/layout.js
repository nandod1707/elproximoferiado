import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: "El Proximo Feriado - Calendario de feriados nacionales en Argentina.",
  description: "Calendario de feriados nacionales en Argentina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
