import { Outlet } from "@tanstack/react-router";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
}

export default App;
