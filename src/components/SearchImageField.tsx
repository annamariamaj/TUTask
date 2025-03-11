import { Button, Field, Input, Stack } from "@chakra-ui/react"

interface FormValues {
  firstName: string
  lastName: string
}

const Demo = () => {

  return (
    <Field.Root required>
    <Field.Label>
      Search for an image
    </Field.Label>
    <Input placeholder="Start typing..." />
    <Field.HelperText>It can be anything you want!</Field.HelperText>
  </Field.Root>
  )
}