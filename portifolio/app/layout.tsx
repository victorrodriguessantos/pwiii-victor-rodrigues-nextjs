'use client'; // Opcional, só se usar hooks no layout

import './globals.css'; // importe seu CSS global aqui
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
