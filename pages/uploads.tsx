import { authApi } from '@/api-client';
import { setLoading } from '@/store';
import { Box, Typography, Stack, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button, TextareaAutosize } from '@mui/material';
import { useRouter } from 'next/router';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export interface IUploadsProps {
}

export default function Uploads(props: IUploadsProps) {
    //save value
    const [bookName,setBookName] = useState('');
    const [description,setDescription] = useState('');
    //
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const handleAuthorChange = (event: SelectChangeEvent) => {
        setAuthor(event.target.value as string);
    };
    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
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
    //
    const router = useRouter();
    const dispatch = useDispatch();
    const handleUpload= async()=> {
        dispatch(setLoading(true));

        try {
          if(!bookName){
            enqueueSnackbar('Vui lòng nhập tên sách', { variant: "error" });
            return;
    
          }
          if(!author){
            enqueueSnackbar('Vui lòng chọn tên tác giả', { variant: "error" });
            return;
          }
          if(!image){
            enqueueSnackbar('Vui lòng đăng tải hình ảnh', { variant: "error" });
            return;
          }
          if(!category){
            enqueueSnackbar('vui long chon the loai sach', { variant: "error" });
            return;
          }
          if(!description){
            enqueueSnackbar('Vui lòng viết mô tả về sách', { variant: "error" });
            return;
          }
          const { data } = await authApi.upload({
            name: bookName,
            describe: description,
            img: image,
            id_author: author,
            id_category:category
          });
          enqueueSnackbar("Upload Success", { variant: "success" });router.push('/index');
        } catch (error: any) {
          console.log(error);
          if (error?.response?.data?.message) {
            enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
          } else {
            enqueueSnackbar(error?.message, { variant: "error" });
          }
        } finally {
          dispatch(setLoading(false));
        }

    }

    return (
        <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', marginLeft: '20%', marginRight: '20%', paddingTop: '3%', paddingBottom: '3%'}}>
            <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Uploads</Typography>
            <Stack spacing={1} sx={{ marginTop: '20px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Tên Sách</Typography>
                <TextField id="outlined-basic" onChange={(e)=> setBookName(e.target.value)} label="Hãy điền tên sách" variant="outlined" sx={{ height: '35', width: '250' }} />
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
                        onChange={handleAuthorChange}
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
                <Typography variant='h6' sx={{ fontSize: '18px' }} >Thể Loại</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ fontSize: '16px'}} >Thể Loại</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Thể loại"
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={10}>Truyện cười</MenuItem>
                        <MenuItem value={20}>Sách Tham Khảo</MenuItem>
                        <MenuItem value={30}>Tài Liệu Môn Học</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '40px' }}>
                <Typography variant='h6' sx={{ fontSize: '18px', }} >Mô Tả</Typography>
                <TextareaAutosize onChange={(e)=> setDescription(e.target.value)} disabled={false} placeholder="hãy thêm mô tả về sách" minRows={4}/>
                {/* <TextField id="outlined-basic" label="hãy thêm mô tả về sách" variant="outlined" sx={{ height: '35', width: '250' }} /> */}
            </Stack>
            <Stack spacing={1} sx={{ marginTop: '30px',display: 'flex',alignItems: 'center',justifyContent: 'center' }} >
                <Button variant="outlined" onClick={handleUpload} sx={{ width: '35%', height: '10%'}}>Submit</Button>
            </Stack>
        </Box>
    );
}
