import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (data) => {
    setOpen(true);
    console.log("Done ");
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Stack direction={"row"} gap={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required and min = 5 "
              : ""
          }
          {...register("firstName", { required: true, minLength: 5 })}
          sx={{ flex: 1 }}
          variant="filled"
          id="firstName"
          label="First Name "
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required and min = 5 "
              : ""
          }
          {...register("lastName", { required: true, minLength: 5 })}
          sx={{ flex: 1 }}
          variant="filled"
          id="lastName"
          label="Last Name "
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email)
            ? "This field is required and must be a valid email"
            : ""
        }
        {...register("email", { required: true, pattern: emailRegex })}
        variant="filled"
        id="email"
        label=" Email "
      />

      <TextField
        error={Boolean(errors.phone)}
        helperText={
          Boolean(errors.phone)
            ? "This field is required and must be a valid phone"
            : ""
        }
        {...register("phone", { required: true, pattern: phoneRegex })}
        variant="filled"
        id="phone"
        label="Contact Number"
      />

      <TextField variant="filled" id="addressOne" label="Adress 1" />

      <TextField variant="filled" id="addressTwo" label="Adress 2" />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ alignSelf: "end" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar 
          anchorOrigin={{ vertical:"top", horizontal:"right" }}
          key={"top" + "right"}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%", color:"#fff" , transition:".25s"}}
          >
            User Added Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
