import { Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../lib/validation/validationSchemas";
import type { RegisterFormValues } from "../interfaces/interfaces";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

const Register = () => {
  // const [mode, setMode] = useState<string>("register");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const navigate = useNavigate();

  const { registerWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormValues) => {
    let result = { success: false, message: "" };
    result = await registerWithEmail(data.name, data.email, data.password);
    if (result.success) {
      navigate({ to: "/dashboard" });
    }
    if (!result.success) {
      alert(result.message);
    }
    console.log(result);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-indigo-600 rounded-2xl p-5">
      <div className="relative my-8">
        <TextInput
          placeholder="First Name"
          size="md"
          radius="lg"
          type="name"
          label="Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600 absolute text-sm -bottom-6 left-0">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="relative my-8">
        <TextInput
          placeholder="Email"
          size="md"
          radius="lg"
          type="email"
          label="Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600 absolute text-sm -bottom-6 left-0">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="relative my-8">
        <TextInput
          placeholder="Password"
          size="md"
          radius="lg"
          type="password"
          label="Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-600 absolute text-sm -bottom-6 left-0">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        variant="filled"
        color="indigo"
        size="md"
        radius="lg"
        type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
