import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { cols, rows } from "./invoicesData";
import TextHeaderSection from "../../components/TextHeaderSection";

export const Invoices = () => {
  return (
    <Stack gap={3}>
      <TextHeaderSection
        title={"invoices"}
        subTitle={"List of invoices Balances"}
      />
      <Box sx={{ height: "100%", width: "98%", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          showToolbar
          rows={rows}
          // @ts-ignore
          columns={cols}
        />
      </Box>
    </Stack>
  );
};
