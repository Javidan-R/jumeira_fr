import "./globals.css"; // Global styles
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Jumiera House",
  description: "A luxury housing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Common Navbar */}
        <Navbar />
        <main>{children}</main>
        {/* Common Footer */}
        <Footer />
      </body>
    </html>
  );
}
