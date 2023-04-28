import { Box, Button, Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
export interface IUploadsProps {
}

export default function Details(props: IUploadsProps) {
    const columns:any = [
        { field: 'id', headerName: 'Id', width: 80, editable: false },
        { field: 'CategoryName', headerName: 'Category Name',width: 400, type: 'text', editable: true },
        {
          field: 'description',
          headerName: 'Description',
          type: 'text',
          width: 440,
          editable: true,
        },
        ,
        {
          field: 'createAt',
          headerName: 'Create At',
          type: 'text',
          width: 180,
          editable: true,
        },
        {
          field: 'UpdateAt',
          headerName: 'Update At',
          type: 'text',
          width: 180,
          editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 70,
            editable: false,
          },
      ];
      
      const rows: GridRowsProp = [

        {
          id: 1,
          CategoryName: 'Category Name',
          description: 25,
          createAt:"date",
          UpdateAt:"date",
          action: 'icon',
        },
      ];
    return (
        <Box sx={{ backgroundColor:'white'}}>
            <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Manager Category</Typography>
            <Button variant="outlined" sx={{ width: '35px', height: '60px'}}>Create New</Button>
            <Box sx={{ height: '100%', width: '100%' }}>
               <DataGrid rows={rows} columns={columns} />
            </Box>
            <Box>
                 <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Create</Typography>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Category Name</Typography>
                <TextField id="outlined-basic" label="Hãy điền ten the loai" variant="outlined" sx={{ height: '35', width: '250' }} />
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '40px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Mô Tả</Typography>
                <TextareaAutosize  disabled={false} placeholder="hãy thêm mô tả về sách" minRows={4}/>
                {/* <TextField id="outlined-basic" label="hãy thêm mô tả về sách" variant="outlined" sx={{ height: '35', width: '250' }} /> */}
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '30px',display: 'flex',alignItems: 'center',justifyContent: 'center' }} >
                <Button variant="outlined" sx={{ width: '35%', height: '10%'}}>Create</Button>
            </Stack>
            </Box>
        </Box>
    );
}
 