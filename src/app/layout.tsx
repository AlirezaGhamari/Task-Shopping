import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-slate-200"
      >
        {children}
      </body>
    </html>
  );
}
