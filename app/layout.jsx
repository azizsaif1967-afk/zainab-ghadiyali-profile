import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata = {
  title: "Stackbirds — self-trained agents for ops teams",
  description:
    "Record any browser workflow once. Stackbirds trains an autonomous agent that runs it for you — forever. No prompts, no glue code, no babysitting.",
  metadataBase: new URL("https://stackbirds.xyz"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
