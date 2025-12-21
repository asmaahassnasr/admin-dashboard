import { DataGrid } from "@mui/x-data-grid";
import { Box, Stack } from "@mui/material";
import { cols, rows } from "./contactsData";
import TextHeaderSection from "../../components/TextHeaderSection";

export const Contacts = () => {
  return (
    <Stack gap={3}>
      <TextHeaderSection
        title={"contacts"}
        subTitle={"List of contacts to future refrence"}
      />
      <Box sx={{ height: "100%", width: "98%", mx: "auto" }}>
        <DataGrid
          showToolbar
          rows={rows}
          // @ts-ignore
          columns={cols}
        />
      </Box>
    </Stack>
  );
};
