import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
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
  {
    id: "java",
    label: "java",
    value: 179,
    color: "hsl(244, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 411,
    color: "hsl(69, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 443,
    color: "hsl(156, 70%, 50%)",
  },
];

export default function SimplePieChart() {
  const them = useTheme();

  return (
    <Box py={2} height={"300px"}>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.7}
        padAngle={0.6}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        colors={{ scheme: "category10" }}
        cornerRadius={2}
        theme={{
          text: {
            fontSize: 11,
            fill: them.palette.text.primary,
            outlineWidth: 0,
            outlineColor: them.palette.text.primary,
          },
          axis: {
            domain: {
              line: {
                stroke: them.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: them.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: them.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: them.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: them.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: them.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: them.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: them.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: them.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: them.palette.background.default,
              color: them.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
      />
    </Box>
  );
}
