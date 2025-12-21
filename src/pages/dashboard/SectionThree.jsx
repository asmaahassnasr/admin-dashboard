import {Stack} from "@mui/material";
import SectionThreeCard from "./SectionThreeCard";
import SimplePieChart from "../../pages/piechart/SimplePieChart";
import BarChartComponent from "../../pages/barchart/BarChartComponent";
import MapChartComp from "../../pages/mapchart/mapChartComp";



export default function SectionThree() {
  return (
    <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
     <SectionThreeCard  isFirstCard={true} cardChart={<SimplePieChart />} cardTitle={"Campaig"}/>
     <SectionThreeCard  cardChart={<BarChartComponent isDashboard={true}/>} cardTitle={"Sales Quantity"}/>
     <SectionThreeCard  cardChart={<MapChartComp isDashboard={true} />} cardTitle={"Geography Based Traffic"}/>
    </Stack>
  );
}
