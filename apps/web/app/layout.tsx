import * as React from 'react'

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
