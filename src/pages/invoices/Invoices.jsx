import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { cols, rows } from './invoicesData'

export const Invoices = () => {
  return (
     <Box sx={{ height: "100%", width: "98%", mx: "auto" }}>
      <DataGrid
        checkboxSelection
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={cols}
      />
    </Box>
  )
}
