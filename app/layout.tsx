import "./globals.css"
import { Providers } from "./providers"

export const metadata = {
  title: "Redux Demo",
  description: "NextJS 13 with Redux Toolkit",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
