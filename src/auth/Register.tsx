import { TextInput, Button, Stack } from "@mantine/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { RegisterFormValues } from "../interfaces/interfaces";

const Register = () => {
  const [mode, setMode] = useState<string>("register");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({ mode: "onChange" });

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
