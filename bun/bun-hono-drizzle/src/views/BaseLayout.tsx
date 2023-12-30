import type { FC } from 'hono/jsx'
export const Layout: FC = (props) => {
    return (
        
      <html>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>

        </head>
        <body>{props.children}
        </body>
      </html>
    )
  }