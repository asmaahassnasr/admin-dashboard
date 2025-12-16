import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./tabledata";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

  const columns = [
    { field: "ID", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Accesss",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: "100px",
              padding: "5px",
              mx: "auto",
              mt: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              borderRadius: "10px",
              background:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                fontSize="small"
                sx={{ color: "white" }}
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined fontSize="small" sx={{ color: "white" }} />
            )}

            {access === "User" && (
              <LockOpenOutlined fontSize="small" sx={{ color: "white" }} />
            )}

            <Typography sx={{ fontSize: "13px", color: "white" }}>
              {" "}
              {access}{" "}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "100%", width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
