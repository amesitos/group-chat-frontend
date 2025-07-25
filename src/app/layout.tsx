import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800 font-sans">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
