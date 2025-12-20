import { DownloadOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

export default function Dashboard() {
  return (
    <div>
      <Box sx={{textAlign:"end"}}>
        <Button sx={{padding:"6px 8px" , textTransform:"capitalize"}} variant='contained' color='primary'>
          <DownloadOutlined />
          Download Report
        </Button>
      </Box>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}
