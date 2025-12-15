// C:\Users\kenny\Desktop\Proyecto Front-End\plantilla_mypersonalproject\src\app\layout.jsx

import "./globals.css";
import ThemeProvider from "./theme-provider";
import FloatButtons from "./components/FloatButtons";

export const metadata = {
  title: "Scriptor",
  description: "Landing page",
  icons: {
    icon: "/scriptoricon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 
          Envuelve todo en ThemeProvider (client)
          + FloatButtons
        */}
        <ThemeProvider>
          {children}
          <FloatButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
