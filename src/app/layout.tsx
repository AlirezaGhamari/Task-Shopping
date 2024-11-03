import "./globals.css";
import StoreProvider from "./StoreProvider";


export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-slate-100 "
      >
       <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
