import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { cols, rows } from "./contactsData";

export const Contacts = () => {
  return (
    <Box sx={{ height: "100%", width: "98%", mx: "auto" }}>
      <DataGrid
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={cols}
      />
    </Box>
  );
};
