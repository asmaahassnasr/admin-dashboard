import { Stack } from "@mui/material";
import { Email, Traffic, PersonAdd, PointOfSale } from "@mui/icons-material";
import SectionOneCard from "./SectionOneCard";

const data = [
  {
    id: "haskell",
    label: "haskell",
    value: 534,
    color: "hsl(117, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 332,
    color: "hsl(309, 70%, 50%)",
  },
]


export default function SectionOne() {
  return (

    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >

      <SectionOneCard
        icon={<Email color="secondary" sx={{fontSize:"30px"}}/>}
        title={"23,40"}
        subTitle={"Email Sent"}
        data={data}
        chartIncrease={"+21%"}
        scheme={"nivo"}
      />

      <SectionOneCard
        icon={<PointOfSale color="secondary" sx={{fontSize:"30px"}}/>}
        title={"51,504"}
        subTitle={"Sales Optained"}
        data={data}
        chartIncrease={"+5%"}
        scheme={"dark2"}
      />

      <SectionOneCard
        icon={<PersonAdd color="secondary" sx={{fontSize:"30px"}}/>}
        title={"11,11"}
        subTitle={"New Clients"}
        data={data}
        chartIncrease={"+43%"}
        scheme={"set3"}
      />

      <SectionOneCard
        icon={<Traffic color="secondary" sx={{fontSize:"30px"}}/>}
        title={"12,324"}
        subTitle={"Traffic Received"}
        data={data}
        chartIncrease={"+14%"}
        scheme={"pastel1"}
      />

    </Stack>
  );
}
