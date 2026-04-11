import { type User } from "firebase/auth";

const Settings = ({ user }: { user: User }) => {
  console.log(user);

  return (
    <div>
      <h1>{user.displayName}'s Settings</h1>
      <p>Email: {user.email}</p>
      <p>Email Verified: {user.emailVerified ? "true" : "false"}</p>
    </div>
  );
};

export default Settings;
