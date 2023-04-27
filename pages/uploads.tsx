import { Box, Typography, Stack, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button, TextareaAutosize } from '@mui/material';
import { useState } from 'react';

export interface IUploadsProps {
}

export default function Uploads(props: IUploadsProps) {
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAuthor(event.target.value as string);
    };
    const fileSelectedHandle = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            const b = document.getElementById('boxImage');
            if(b!=null){
                b.style.display='block';
            }
        }
    }
   

    return (
        <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginLeft: '20%', marginRight: '20%', paddingTop: '3%', paddingBottom: '3%'}}>
            <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Uploads</Typography>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Tên Sách</Typography>
                <TextField id="outlined-basic" label="Hãy điền tên sách" variant="outlined" sx={{ height: '35', width: '250' }} />
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px' }} >Tên Tác Giả</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '16px'}} >Tác Giả</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={author}
                        label="Tác Giả"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Tố Hữu</MenuItem>
                        <MenuItem value={20}>Nguyễn Khuyến</MenuItem>
                        <MenuItem value={30}>Xuân diệu</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Hình Ảnh</Typography>
                <Button variant="contained" component="label">
                    Upload a file
                    <input type="file" onChange={fileSelectedHandle} hidden multiple />
                </Button>
                <Box id="boxImage" sx={{ width: '50px', height: '50px' ,display:'none'}} component={'img'} src={image}>
                </Box>
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Giá</Typography>
                <TextField id="outlined-basic" label="hãy thêm giá vào sách" variant="outlined" sx={{ height: '35px', width: '100%' }} />
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '40px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Mô Tả</Typography>
                <TextareaAutosize  disabled={false} placeholder="hãy thêm mô tả về sách" minRows={4}/>
                {/* <TextField id="outlined-basic" label="hãy thêm mô tả về sách" variant="outlined" sx={{ height: '35', width: '250' }} /> */}
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '30px',display: 'flex',alignItems: 'center',justifyContent: 'center' }} >
                <Button variant="outlined" sx={{ width: '35%', height: '10%'}}>Submit</Button>
            </Stack>
        </Box>
    );
}
