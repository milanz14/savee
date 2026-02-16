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

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          placeholder="Email"
          size="md"
          radius="lg"
          label="Email"
          {...register("email")}
        />
        <TextInput
          placeholder="Password"
          size="md"
          radius="lg"
          type="password"
          label="Password"
          {...register("password")}
        />
        <Button
          variant="filled"
          color="indigo"
          size="md"
          radius="lg"
          type="submit">
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default Register;
