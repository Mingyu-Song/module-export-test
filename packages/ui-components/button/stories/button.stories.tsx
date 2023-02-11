import { Stack } from "@chakra-ui/react"
import { ComponentMeta } from "@storybook/react"

import { Button } from "../src"

export default {
  title: "ui-component/Button",
  decorators: [(Story: any) => <Story />],
} as ComponentMeta<typeof Button>

export const Default = () => {
  return (
    <Stack align="start">
      <Button colorScheme="primary">Button</Button>
      <Button colorScheme="green">Button</Button>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="teal">Button</Button>
      <Button colorScheme="pink">Button</Button>
      <Button colorScheme="purple">Button</Button>
      <Button colorScheme="cyan">Button</Button>
      <Button colorScheme="orange">Button</Button>
      <Button colorScheme="yellow">Button</Button>
      <Button colorScheme="white">Button</Button>
    </Stack>
  )
}

export const Outlines = () => (
  <Stack align="start">
    <Button variant="outline" colorScheme="primary">
      Button
    </Button>
    <Button variant="outline" colorScheme="green">
      Button
    </Button>
    <Button variant="outline" colorScheme="blue">
      Button
    </Button>
    <Button variant="outline" colorScheme="teal">
      Button
    </Button>
    <Button variant="outline" colorScheme="pink">
      Button
    </Button>
    <Button variant="outline" colorScheme="purple">
      Button
    </Button>
    <Button variant="outline" colorScheme="cyan">
      Button
    </Button>
    <Button variant="outline" colorScheme="orange">
      Button
    </Button>
    <Button variant="outline" colorScheme="yellow">
      Button
    </Button>
    <Button variant="outline" colorScheme="white">
      Button
    </Button>
  </Stack>
)
