import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import StoreProvider from "./StoreProvider";


export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <StoreProvider>

      <body className="bg-slate-100 flex "
      >
        <Navbar/>
          {children}
      </body>
        </StoreProvider>
    </html>
  );
}
