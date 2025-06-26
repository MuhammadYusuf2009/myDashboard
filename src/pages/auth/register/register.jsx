import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { MY_LOGIN_PAGE } from "../../../helpers/pages";
import FormikInput from "../../../components/inpunt/FormikInput";
import { registerUser } from "../../../firebase/firesotre/auth";
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
      <Paper
        elevation={6}
        sx={{
          px: 4,
          py: 5,
          borderRadius: 4,
          maxWidth: 440,
          mx: "auto",
          background: "linear-gradient(180deg, #ffffff, #f9f9f9)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#4A148C" }}
            >
              Ro‘yxatdan o‘tish
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Iltimos, yangi hisob ochish uchun ma'lumotlaringizni kiriting
            </Typography>
          </Box>

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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(90deg, #7B1FA2, #512DA8)",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #6A1B9A, #4527A0)",
              },
            }}
          >
            Ro‘yxatdan o‘tish
          </Button>

          <Divider sx={{ fontSize: 16, color: "text.secondary" }}>
            Allaqachon hisobingiz bormi?
          </Divider>

          <Button fullWidth sx={{ textTransform: "none" }}>
            <Link
              to={MY_LOGIN_PAGE}
              style={{
                textDecoration: "none",
                color: "#512DA8",
                fontWeight: "bold",
              }}
            >
              Tizimga kirish
            </Link>
          </Button>
        </Stack>
      </Paper>
    </Form>
  );
};

const RegisterPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #E1BEE7, #C5CAE9)",
        width: "100%",
        px: 2,
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Email noto‘g‘ri").required("Email shart"),
          password: Yup.string().required("Parol shart"),
        })}
        onSubmit={(values) => registerUser(values)}
      >
        <FormComponent />
      </Formik>
    </Box>
  );
};

export default RegisterPage;
