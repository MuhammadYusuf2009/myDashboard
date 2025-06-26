import { Stack, TextField, InputLabel, FormControl } from "@mui/material";
import { useFormikContext } from "formik";

const FormikInput = ({
  min,
  max,
  field,
  label,
  type = "text",
  size = "small",
  InputProps = {},
  readOnly = false,
  onChange,
  xatoText = true,
  ...props
}) => {
  const { getFieldMeta, getFieldProps } = useFormikContext();

  const fieldProps = getFieldProps(field);
  const meta = getFieldMeta(field);
  const showError = meta.touched && meta.error;

  return (
    <Stack spacing={0.5}>
      {label && <InputLabel>{label}</InputLabel>}
      <FormControl fullWidth>
        <TextField
          {...props}
          type={type}
          size={size}
          {...fieldProps}
          onChange={onChange ?? fieldProps.onChange}
          inputProps={{ max, min }}
          value={fieldProps.value || ""}
          onWheel={(e) => e.target.blur()}
          InputProps={{ ...InputProps, readOnly }}
          error={Boolean(showError)}
          helperText={xatoText ? "" : showError ? meta.error : ""}
        />
      </FormControl>
    </Stack>
  );
};

export default FormikInput;
