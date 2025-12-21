import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import LineChar from "../lineChartComp/LineChar";
import { Download } from "@mui/icons-material";
import SectionTwoCard from "./SectionTwoCard";

const Transactions = [
  {
    id:"1",
    title: " Transaction 001  ",
    user: "Asmaa Hassan ",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"2",
    title: " Transaction 002  ",
    user: "Ahmed Ragab",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"3",
    title: " Transaction 003  ",
    user: "Sondos Ahmed ",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"4",
    title: " Transaction 004  ",
    user: "Osama Osama",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"5",
    title: " Transaction 001  ",
    user: "Asmaa Hassan ",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"6",
    title: " Transaction 002  ",
    user: "Ahmed Ragab",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"7",
    title: " Transaction 003  ",
    user: "Sondos Ahmed ",
    date: "2026-01-01",
    cost: "$54.23",
  },
  {
    id:"8",
    title: " Transaction 004  ",
    user: "Osama Osama",
    date: "2026-01-01",
    cost: "$54.23",
  },
];

export default function SectionTwo() {
  return (
    <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
      <Paper sx={{ width: "60%" }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography p={1.2} variant="h5" color="secondary">
              Revenue Generated
            </Typography>
            <Typography mx={1.2} variant="h6">
              $345.123
            </Typography>
          </Box>
          <Box mx={5}>
            <IconButton>
              <Download fontSize={"medium"} />
            </IconButton>
          </Box>
        </Stack>
        <LineChar isDashboard={true} />
      </Paper>

      <Box sx={{ maxHeight: "400px", overflow: "auto" , scrollbarColor:"#888 transparent" , flexGrow: 1 }}>
        <Stack gap={2}>
          <Paper>
            <Typography
              variant="h6"
              p={1.2}
              fontWeight={"bold"}
              color="secondary"
            >
              Recent Transactions
            </Typography>
          </Paper>

          {Transactions.map((item) => {
            return (
              <SectionTwoCard key={item.id}
                transactionTitle={item.title}
                transactionSubTitle={item.user}
                transactionDate={item.date}
                transactionCost={item.cost}
              />
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}
