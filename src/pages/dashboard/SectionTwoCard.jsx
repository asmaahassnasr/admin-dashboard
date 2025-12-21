import { Box, Paper, Stack, Typography } from "@mui/material";

export default function SectionTwoCard({
  transactionTitle,
  transactionSubTitle,
  transactionDate,
  transactionCost,
}) {
  return (
    <Paper>
      <Stack
        p={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="body1" fontWeight={"bold"} fontSize={"medium"}>
            {transactionTitle}
          </Typography>
          <Typography mt={1} variant="body2">
            {transactionSubTitle}
          </Typography>
        </Box>
        <Typography fontWeight={"bold"} fontSize={"medium"}>
          {transactionDate}
        </Typography>
        <Typography fontWeight={"bold"} color="secondary">
          {transactionCost}
        </Typography>
      </Stack>
    </Paper>
  );
}
