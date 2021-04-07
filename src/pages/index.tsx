import * as React from "react"
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Tech Lead As Service" description="Contrate uma pessoa tech lead para fazer suas reuniões" />

    <Flex h="100%" alignItems="center">
      <Stack spacing={6} w="100%" maxW="540px">
        <Heading fontWeight="900" fontSize="6xl" w="100%" maxW="600px" lineHeight="1">
          Muitas reuniões durante o dia?
        </Heading>

        <Box>
          <Text fontSize="xl">
            Precisa de alguém pra participar de suas reuniões?
          </Text>
          <Text fontSize="xl" color="pink.600" fontWeight="bold">Nós disponibilizamos um tech lead.</Text>
        </Box>

        <Button w="max-content" colorScheme="pink">Quero um Tech Lead.</Button>
      </Stack>
    </Flex>

  </Layout>
)

export default IndexPage
