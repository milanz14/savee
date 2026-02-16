import { Input } from "@mantine/core";

const Register = () => {
  return (
    <form>
      <Input.Wrapper label="Email" size="md">
        <Input placeholder="Email" size="md" radius="lg" />
      </Input.Wrapper>
      <Input.Wrapper label="Password" size="md">
        <Input placeholder="Password" size="md" radius="lg" type="password" />
      </Input.Wrapper>
    </form>
  );
};

export default Register;
