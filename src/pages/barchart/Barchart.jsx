import { Stack } from "@mui/material";
import BarChartComponent from "./BarChartComponent";
import TextHeaderSection from "../../components/TextHeaderSection";

export const Barchart = () => {
  return (
    <Stack gap={3}>
      <TextHeaderSection
        title={"bar chart"}
        subTitle={"Simple BarChart Example"}
      />
      <BarChartComponent />
    </Stack>
  );
};
