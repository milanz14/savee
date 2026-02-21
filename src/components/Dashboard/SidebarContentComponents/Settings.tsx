import { type User } from "firebase/auth";

const Settings = ({ user }: { user: User }) => {
  return (
    <div>
      <h1>Settings Page for {user.displayName}</h1>
    </div>
  );
};

export default Settings;
