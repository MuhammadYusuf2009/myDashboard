import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MY_REGISTER_PAGE } from "../../../helpers/pages";
import FormikInput from "../../../components/inpunt/FormikInput";
import { loginUser, loginWithGoogle } from "../../../firebase/firesotre/auth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit } = useFormikContext();

  return (
    <Form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <Stack
        spacing={2}
        sx={{
          height: "100vh",
          maxWidth: 400,
          mx: "auto",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Stack spacing={1}>
          <Typography textAlign={"center"} variant="h4">
            Tizimga kirish
          </Typography>

          <FormikInput field="email" label="Email" fullWidth />
          <FormikInput
            field="password"
            label="Parol"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Button type="submit" variant="contained" fullWidth color="success">
          Kirish
        </Button>
        <Divider sx={{ borderStyle: "dashed" }}>yoki</Divider>
        <Button
          variant="contained"
          onClick={loginWithGoogle}
          fullWidth
          color="success"
        >
          Google orqali Kirish
        </Button>
        <Button fullWidth variant="contained">
          <Link
            to={MY_REGISTER_PAGE}
            style={{ textDecoration: "none", color: "white" }}
          >
            Ro‘yxatdan o‘tish
          </Link>
        </Button>
      </Stack>
    </Form>
  );
};

const LoginPage = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Email noto‘g‘ri").required("Email shart"),
        password: Yup.string().required("Parol shart"),
      })}
      onSubmit={(values) => loginUser(values)}
    >
      <FormComponent />
    </Formik>
  );
};

export default LoginPage;
