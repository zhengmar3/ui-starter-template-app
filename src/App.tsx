import { Button, CssBaseline } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { BrowserRouter } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  CustomThemeProvider,
  NotificationConfigurator,
  NotificationSystem,
  SnackbarCloseButton,
  NotificationProvider,
} from "@r3-ui-test/ui-organism-library";

import { baseTheme } from "./theme/baseTheme";
import { lightPalette } from "./theme/lightPalette";
import { darkPalette } from "./theme/darkPalette";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      NotificationSystem.error(message);
    },
  }),
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider
          baseTheme={baseTheme}
          lightPalette={lightPalette}
          darkPalette={darkPalette}
        >
          <NotificationProvider
            action={(snackbarKey) => (
              <SnackbarCloseButton snackbarKey={snackbarKey} />
            )}
            autoHideDuration={3000}
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <NotificationConfigurator />
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  NotificationSystem.info("text");
                }}
              >
                Success
              </Button>
            </LocalizationProvider>
          </NotificationProvider>
        </CustomThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
