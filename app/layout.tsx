import { metadataInfo } from "@/constants/info";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = metadataInfo;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="gradient-background">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
