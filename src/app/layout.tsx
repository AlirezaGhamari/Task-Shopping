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
        <body className=" grid grid-cols-12 h-screen">
          <div className=" col-span-2 h-screen ">
            <Navbar />
          </div>
          <div className=" col-span-10 h-screen  ">{children}</div>
        </body>
      </StoreProvider>
    </html>
  );
}
