import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  metadataBase: new URL("https://signalstack.example"),
  title: {
    default: "Signal Stack - Practical Tech Notes",
    template: "%s | Signal Stack"
  },
  description:
    "A clean technology blog for builders working across AI, web performance, DevOps, data platforms, and product engineering.",
  openGraph: {
    title: "Signal Stack - Practical Tech Notes",
    description:
      "Readable field notes for modern engineering teams shipping durable software.",
    url: "https://signalstack.example",
    siteName: "Signal Stack",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Stack - Practical Tech Notes",
    description:
      "Readable field notes for modern engineering teams shipping durable software."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
