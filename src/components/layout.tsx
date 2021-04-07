/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import { Box, Flex, Grid } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <Box backgroundImage="url('./images/techlidies.svg')" backgroundSize="contain" backgroundPosition="center">
      <Box
        w="100vw"
        h="100vh"
        bgGradient={[
          "linear(-76deg, transparent 10%, gray.50 40%)",
          "linear(-76deg, transparent 5%, gray.50 50%)",
          "linear(-76deg, transparent 5%, gray.50 50%)",
          "linear(-76deg, transparent 60%, gray.50 70%)",
        ]}
      >
        <Grid w="100%" maxW="1200px" justifyContent="center" gridTemplateRows="90vh 10vh">
          <main>{children}</main>
          <Flex as="footer" p={4} alignItems="center">
            © {new Date().getFullYear()}, tech lead as a service.
          </Flex>
        </Grid>
      </Box>
    </Box>
  )
}

export default Layout
