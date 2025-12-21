import {  Stack, Typography, Paper, Box } from "@mui/material";


export default function SectionThreeCard({
  cardTitle,
  cardChart,
  isFirstCard=false,
}) {

  return (
    <Paper sx={{p: 2, width:"33%", flexGrow:1 }}>
      <Stack gap={2}>
        <Typography variant="h5" color="secondary">
          {cardTitle}
        </Typography>
        <Stack alignItems={"center"}>
          <Box width={"100%"}>{cardChart}</Box>
          {isFirstCard ? (
            <>
              <Typography>$45.23 Revenue Generated </Typography>
              <Typography>Included Extra xx rrr rr ttt </Typography>
            </>
          ) : (
            ""
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}
