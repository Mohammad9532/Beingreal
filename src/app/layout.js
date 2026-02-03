import "./globals.css";

export const metadata = {
  title: "BeingReal | Founder-Led Advisory & Digital Studio",
  description: "Built with intent. Maintained with integrity. A luxury boutique advisory and digital studio focused on high-trust systems and products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

