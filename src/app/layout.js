import "./globals.css";

export const metadata = {
  title: "Spammer",
  description: "Spammer App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
