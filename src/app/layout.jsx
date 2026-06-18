import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Paramount Garden Service | Premium Landscaping in Sri Lanka",
  description: "Hotel, resort, commercial, and high-end residential landscaping specialists in Sri Lanka. Expert landscape design, hard landscaping, interlock paving, and drainage solutions.",
  keywords: "landscaping sri lanka, garden service sri lanka, hotel landscaping, resort landscaping colombo, interlock paving sri lanka, paramount garden service",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-beige text-charcoal">
        {children}
      </body>
    </html>
  );
}
