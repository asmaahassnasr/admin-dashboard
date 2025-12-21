import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./mapData";
import { geoData } from "./mapCountries";

export default function MapChartComp({ isDashboard = false }) {
  const them = useTheme();
  return (
    <Box
      sx={{
        height: isDashboard ? "350px" : "100vh",
        margin: 2,
        p: 1,
        border: isDashboard ? "none" : `1px solid ${them.palette.divider}`,
        borderRadius: "5px",
      }}
    >
      <ResponsiveChoropleth
        data={data}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        projectionScale={isDashboard ? 50 : 140}
        theme={{
          background: isDashboard ? "none" : them.palette.background.default,
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
                fill: them.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: them.palette.text.primary,
              },
            },
          },
          grid: {
            line: {
              stroke: them.palette.divider,
              strokeWidth: 0,
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
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -30,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: them.palette.text.primary,
                  itemOpacity: 0.85,
                  symbolSize: 18,
                },
              ]
        }
      />
    </Box>
  );
}
