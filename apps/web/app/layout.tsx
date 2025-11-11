import * as React from 'react'

import '../globals.css'

interface RootLayoutProps extends React.HTMLProps<HTMLHtmlElement> {}

function RootLayout(props: RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
