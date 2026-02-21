import { Outlet } from "@tanstack/react-router";
import { MantineProvider } from "@mantine/core";
// import { QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Outlet />
    </MantineProvider>
  );
}

export default App;
