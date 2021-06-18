/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"

const Layout = ({ children }) => {
  return (
    <div className="bg-contain bg-center lg:bg-techlidies overflow-hidden">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(90deg, white 55%, transparent 50%)`
        }}
      >
        <div className="grid w-full max-w-7xl mx-auto" style={{ gridTemplateRows: '90vh 10vh' }}>
          <main className="grid place-items-center justify-start">{children}</main>
          <footer className="flex items-center p-4 text-gray-700 text-sm font-semibold">
            © {new Date().getFullYear()}, tech lead as a service.
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
