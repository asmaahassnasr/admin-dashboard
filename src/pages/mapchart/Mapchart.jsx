import { Stack } from "@mui/material";
import MapChartComp from "./MapChartComp";
import TextHeaderSection from "../../components/TextHeaderSection";

export const Mapchart = () => {
  return (
    <Stack gap={3}>
      <TextHeaderSection
        title={"geography"}
        subTitle={"Simple Geography Chart "}
      />
      <MapChartComp />
    </Stack>
  );
};
