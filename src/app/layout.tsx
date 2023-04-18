import "./globals.css";

export const metadata = {
  title: "Jester-App",
  description: "Jester-App Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
