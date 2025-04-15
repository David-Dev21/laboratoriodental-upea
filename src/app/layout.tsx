"use client";
import "@/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "@/layouts/Wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="es" suppressHydrationWarning={isDev}>
      <head>
        <title>Laboratorio Dental</title>
        <link rel="icon" href="assets/img/logo-laboratorio-dental.jpg" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
