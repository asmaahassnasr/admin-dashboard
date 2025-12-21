import { Box, Typography } from "@mui/material";

export default function TextHeaderSection({title , subTitle}) {
  return (
    <Box>
        <Typography variant="h5" color="info.light" textTransform={"uppercase"} fontWeight={"bold"}> {title} </Typography>
        <Typography variant="body2">{subTitle}</Typography>
    </Box>
  )
}
