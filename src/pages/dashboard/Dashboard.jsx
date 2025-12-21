import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import TextHeaderSection from "../../components/TextHeaderSection";

export default function Dashboard() {
  return (
    <Stack gap={3}>
      <TextHeaderSection title={"Dashboard"} subTitle={"Welcome to Dashboard"}/>
      <Box sx={{ textAlign: "end" }}>
        <Button
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadOutlined />
          Download Report
        </Button>
      </Box>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Stack>
  );
}
