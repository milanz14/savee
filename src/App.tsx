import { Outlet } from "@tanstack/react-router";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Outlet />
    </MantineProvider>
  );
}

export default App;
