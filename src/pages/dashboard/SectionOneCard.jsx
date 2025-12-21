import { Box, useTheme, Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function SectionOneCard({
  icon,
  title,
  subTitle,
  data,
  chartIncrease,
  scheme,
}) {
  const them = useTheme();

  return (
    <Paper
      sx={{
        minWidth: "333px",
        flexGrow: 1,
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack alignItems={"center"} gap={1}>
        <Box height={"65px"} width={"65px"}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            innerRadius={0.7}
            padAngle={0.6}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            colors={{scheme:scheme}}
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
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {chartIncrease}
        </Typography>
      </Stack>
    </Paper>
  );
}
