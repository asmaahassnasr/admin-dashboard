import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 242
      },
      {
        "x": "helicopter",
        "y": 211
      },
      {
        "x": "boat",
        "y": 224
      },
      {
        "x": "train",
        "y": 1
      },
      {
        "x": "subway",
        "y": 200
      },
      {
        "x": "bus",
        "y": 266
      },
      {
        "x": "car",
        "y": 86
      },
      {
        "x": "moto",
        "y": 288
      },
      {
        "x": "bicycle",
        "y": 278
      },
      {
        "x": "horse",
        "y": 50
      },
      {
        "x": "skateboard",
        "y": 296
      },
      {
        "x": "others",
        "y": 155
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 154
      },
      {
        "x": "helicopter",
        "y": 197
      },
      {
        "x": "boat",
        "y": 24
      },
      {
        "x": "train",
        "y": 100
      },
      {
        "x": "subway",
        "y": 246
      },
      {
        "x": "bus",
        "y": 189
      },
      {
        "x": "car",
        "y": 266
      },
      {
        "x": "moto",
        "y": 36
      },
      {
        "x": "bicycle",
        "y": 19
      },
      {
        "x": "horse",
        "y": 137
      },
      {
        "x": "skateboard",
        "y": 125
      },
      {
        "x": "others",
        "y": 14
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 164
      },
      {
        "x": "helicopter",
        "y": 60
      },
      {
        "x": "boat",
        "y": 95
      },
      {
        "x": "train",
        "y": 237
      },
      {
        "x": "subway",
        "y": 46
      },
      {
        "x": "bus",
        "y": 106
      },
      {
        "x": "car",
        "y": 16
      },
      {
        "x": "moto",
        "y": 9
      },
      {
        "x": "bicycle",
        "y": 14
      },
      {
        "x": "horse",
        "y": 124
      },
      {
        "x": "skateboard",
        "y": 230
      },
      {
        "x": "others",
        "y": 32
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 156
      },
      {
        "x": "helicopter",
        "y": 209
      },
      {
        "x": "boat",
        "y": 193
      },
      {
        "x": "train",
        "y": 138
      },
      {
        "x": "subway",
        "y": 261
      },
      {
        "x": "bus",
        "y": 161
      },
      {
        "x": "car",
        "y": 50
      },
      {
        "x": "moto",
        "y": 120
      },
      {
        "x": "bicycle",
        "y": 267
      },
      {
        "x": "horse",
        "y": 173
      },
      {
        "x": "skateboard",
        "y": 235
      },
      {
        "x": "others",
        "y": 275
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 159
      },
      {
        "x": "helicopter",
        "y": 245
      },
      {
        "x": "boat",
        "y": 150
      },
      {
        "x": "train",
        "y": 293
      },
      {
        "x": "subway",
        "y": 177
      },
      {
        "x": "bus",
        "y": 214
      },
      {
        "x": "car",
        "y": 15
      },
      {
        "x": "moto",
        "y": 181
      },
      {
        "x": "bicycle",
        "y": 127
      },
      {
        "x": "horse",
        "y": 222
      },
      {
        "x": "skateboard",
        "y": 227
      },
      {
        "x": "others",
        "y": 232
      }
    ]
  }
]

export const LineChartComp = () => {

  const them = useTheme();

  return (
    <Box sx={{height:"75vh"}}>
        <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 45 }}
        axisLeft={{ legend: 'count', legendOffset: -50 }}
        pointSize={10}
        curve='catmullRom'
        pointColor={{ theme: 'background' }}
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
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}
