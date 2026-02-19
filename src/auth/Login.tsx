import { Button, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../lib/validation/validationSchemas";
import type { RegisterFormValues } from "../interfaces/interfaces";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

const Login = () => {
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

  const { loginWithEmail } = useAuth();

  const onSubmit = async (data: RegisterFormValues) => {
    let result = { success: false, message: "" };
    result = await loginWithEmail(data.email, data.password);
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
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl p-5">
      <div className="relative my-5">
        <TextInput
          placeholder="Email"
          size="md"
          radius="lg"
          type="email"
          label="Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-400 absolute text-sm -bottom-6 right-0">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="relative my-5">
        <TextInput
          placeholder="Password"
          size="md"
          radius="lg"
          type="password"
          label="Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-400 absolute text-sm -bottom-6 right-0">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        variant="filled"
        size="md"
        radius="lg"
        type="submit"
        style={{
          background: "linear-gradient(45deg, #818cf8, #a5b4fc)",
          border: "none",
          fontWeight: 700,
          boxShadow: "0 4px 20px rgba(129,140,248,0.3)",
        }}>
        Login
      </Button>
    </form>
  );
};

export default Login;
