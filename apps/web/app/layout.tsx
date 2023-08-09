"use client";

// app/layout.tsx
import { Providers } from "./providers";

interface IRootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }: IRootLayout) {
  console.log("main layout");

  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
