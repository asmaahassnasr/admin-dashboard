import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 125,
    burger: 146,
    sandwich: 18,
    kebab: 173,
  },
  {
    country: "AE",
    "hot dog": 138,
    burger: 132,
    sandwich: 172,
    kebab: 93,
  },
  {
    country: "AF",
    "hot dog": 17,
    burger: 23,
    sandwich: 96,
    kebab: 81,
  },
  {
    country: "AG",
    "hot dog": 11,
    burger: 48,
    sandwich: 15,
    kebab: 185,
  },
  {
    country: "AI",
    "hot dog": 98,
    burger: 15,
    sandwich: 20,
    kebab: 9,
  },
  {
    country: "AL",
    "hot dog": 173,
    burger: 39,
    sandwich: 103,
    kebab: 186,
  },
  {
    country: "AM",
    "hot dog": 168,
    burger: 134,
    sandwich: 128,
    kebab: 166,
  },
];

export const Barchart = () => {

  const them = useTheme();
  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        indexBy="country"
        keys={["hot dog", "burger", "sandwich", "kebab"]}
        labelSkipWidth={12}
        labelSkipHeight={12}
        colors={{ scheme: "paired" }}
        theme={{
          background: them.palette.background.default,
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
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{ legend: "country (indexBy)", legendOffset: 35 }}
        axisLeft={{ legend: "food", legendOffset: -50 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </Box>
  );
};
