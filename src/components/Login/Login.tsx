import {
  Box,
  Button,
  TextField,
  Stack,
  Divider,
  Paper,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import { useToggle } from "@mantine/hooks";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LogoR3Light as Logo } from "@r3-ui-test/ui-organism-library";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();

  const [type, toggle] = useToggle(["login", "register"]);

  const loginForm = useFormik({
    initialValues: {
      email: "user@r3.com",
      password: "password!@£$£%£",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/", { replace: true });
    },
  });

  return (
    <Box
      className="flex justify-center items-start min-h-screen min-w-screen"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
      })}
    >
      <Paper
        variant="outlined"
        className="flex flex-col p-4 mt-48 w-1/4 min-w-fit"
      >
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Welcome to R3, {type} with</div>
        </div>
        <Stack
          className="my-8"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Button
            disableElevation
            variant="contained"
            className="w-full"
            color="primary"
            startIcon={<GoogleIcon />}
          >
            Google
          </Button>
          <Button
            disableElevation
            variant="contained"
            className="w-full"
            color="primary"
            startIcon={<CloudCircleIcon />}
          >
            Azure
          </Button>
        </Stack>
        <Divider className="text-xs">Or continue with email</Divider>
        <form onSubmit={loginForm.handleSubmit}>
          <Stack className="my-8" direction="column" spacing={2}>
            {type === "register" && (
              <TextField
                id="name"
                name="name"
                label="Name"
                type="text"
                size="small"
              />
            )}
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              error={loginForm.touched.email && Boolean(loginForm.errors.email)}
              helperText={loginForm.touched.email && loginForm.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              error={
                loginForm.touched.password && Boolean(loginForm.errors.password)
              }
              helperText={
                loginForm.touched.password && loginForm.errors.password
              }
            />
            {type === "register" && (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I accept terms and conditions"
                />
              </FormGroup>
            )}
          </Stack>
          <Stack
            className="mb-2"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Button variant="text" size="small" onClick={() => toggle()}>
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Button>
            <Button variant="contained" type="submit" disableElevation>
              {type}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
