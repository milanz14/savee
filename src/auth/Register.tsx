import { TextInput, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form>
      <Stack>
        <TextInput placeholder="Email" size="md" radius="lg" label="Email" />
        <TextInput
          placeholder="Password"
          size="md"
          radius="lg"
          type="password"
          label="Password"
        />
      </Stack>
    </form>
  );
};

export default Register;
