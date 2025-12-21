import { Stack } from "@mui/material";
import LineChar from "./LineChar";
import TextHeaderSection from "../../components/TextHeaderSection";

export const LineChartComp = () => {
  return (
    <Stack gap={3}>
      <TextHeaderSection
        title={"Line chart"}
        subTitle={"Simple Line Chart Example"}
      />
      <LineChar />
    </Stack>
  );
};
