import "./globals.css";

export const metadata = {
  title: "Chat App",
  description: "Landing page de chat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
