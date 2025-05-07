// C:\Users\kenny\Desktop\Proyecto Front-End\plantilla_mypersonalproject\src\app\layout.jsx

import "./globals.css";
import ThemeProvider from "./theme-provider";
import FloatButtons from "./components/FloatButtons";

export const metadata = {
  title: "CopyGen Replica",
  description: "Landing page inspired by CopyGen theme",
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
