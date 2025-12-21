import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box height={"100vh"} textAlign={"center"} py={10}>
      <Typography variant="h4" color="secondary">
        404Not Found Page
        <br />
        <br />
        Please try agian later .....
      </Typography>
    </Box>
  );
}
