import { type User } from "firebase/auth";

const Settings = ({ user }: { user: User }) => {
  return (
    <div>
      <h1>{user.displayName}'s Settings</h1>
    </div>
  );
};

export default Settings;
