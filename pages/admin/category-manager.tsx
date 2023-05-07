import { Box, Button, Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import React, { useState } from "react";
export interface IUploadsProps {
}

const initialRows: any = [

  {
    id: 1,
    CategoryName: 'Category Name',
    description: 25,
    createAt:"date",
    UpdateAt:"date",
    action: <DeleteIcon />,
  },
];
type Row = (typeof initialRows)[number];
export default function Details(props: IUploadsProps) {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const toggleAdmin = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      );
    },
    [],
  );

  const duplicateUser = React.useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );
  const handleCreate = (event:any) =>{
    const popup = document.getElementById('box-create');
    if(popup!=null){
      popup.style.visibility='visible';   
   }
    const blur = document.getElementById('blur');
    if(blur!=null){
      blur.style.filter = 'blur(6px)';
      blur.style.pointerEvents = 'none';
   }
  }
  const handleBackCreate = (event:any) =>{
    const popup = document.getElementById('box-create');
    if(popup!=null){
      popup.style.visibility='hidden';   
   }
    const blur = document.getElementById('blur');
    if(blur!=null){
      blur.style.filter = 'none';
      blur.style.pointerEvents = 'auto';
   }
  }
  const handleEdit = (event:any) =>{
    const popupE = document.getElementById('box-edit');
    if(popupE!=null){
      popupE.style.visibility='visible';   
   }
    const blur = document.getElementById('blur');
    if(blur!=null){
      blur.style.filter = 'blur(6px)';
      blur.style.pointerEvents = 'none';
   }
  }
  const handleEditBack = (event:any) =>{
    const popupE = document.getElementById('box-edit');
    if(popupE!=null){
      popupE.style.visibility='hidden';   
   }
   const blur = document.getElementById('blur');
    if(blur!=null){
      blur.style.filter = 'none';
      blur.style.pointerEvents = 'auto';
   }
  }

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
            type: "actions",
            align: "left",
            width: 70,
            getActions: (params : any) => [
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={deleteUser(params.id)}
                showInMenu
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Toggle Admin"
                onClick={toggleAdmin(params.id)}
                showInMenu
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Duplicate User"
                onClick={duplicateUser(params.id)}
                showInMenu
              />,
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="edit"
                onClick={handleEdit}
                showInMenu
              />,
            ],
          },
      ];
      
    return (
        <Box sx={{ backgroundColor:'white',height:'500px'}}>
          <Box id="blur" sx={{ height:'100%'}}>
          <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Manager Category</Typography>
            <Button variant="outlined" sx={{ width: '10%', height: '10%', margin:'1%'}} onClick={handleCreate}>Create New</Button>
            <Box sx={{ height: '100%', width: '100%' }}>
               <DataGrid rows={rows} columns={columns} />
            </Box>
          </Box>
            <Box id="box-create" sx={{ position:'absolute',marginTop:'-30%',width:'40%',visibility:'hidden',background:'white',border:"1px solid black",padding:"2%",marginLeft:"30%"}}>
            <Stack spacing={1} sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                 <Typography variant='h1' sx={{ fontSize: '32px'}}>Create</Typography>
                 <Button variant="outlined" sx={{ width: '35%', height: '10%'}} onClick={handleBackCreate}>Back</Button>
            </Stack>
                
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
                <Button variant="outlined" sx={{ width: '55%', height: '45%'}}><DeleteIcon />Create</Button>
            </Stack>
            </Box>

            <Box id="box-edit" sx={{ position:'absolute',marginTop:'-30%',width:'40%',visibility:'hidden',background:'white',border:"1px solid black",padding:"2%",marginLeft:"30%"}}>
            <Stack spacing={1} sx={{ display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
                 <Typography variant='h1' sx={{ fontSize: '32px'}}>Edit</Typography>
                 <Button variant="outlined" sx={{ width: '35%', height: '10%'}} onClick={handleEditBack}>Back</Button>
            </Stack>
                
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
                <Button variant="outlined" sx={{ width: '55%', height: '45%'}}><DeleteIcon />Edit</Button>
            </Stack>
            </Box>
        </Box>
    );
}
 