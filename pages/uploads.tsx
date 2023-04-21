import { Box, Typography,Stack, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent,Button } from '@mui/material';
import { useState } from 'react';

export interface IUploadsProps {
}

export default function Uploads (props: IUploadsProps) {
    const [author, setAuthor] = useState('');
    const [image,setImage]= useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setAuthor(event.target.value as string);
    };
    const fileSelectedHandle = (event: any) =>{
        if(event.target.files && event.target.files[0]){
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
  return (
    <Box component={'form'} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'left', marginLeft:'200px', marginRight:'200px', paddingTop:'50px',paddingBottom:'50px'}}>
        <Typography variant='h1' sx={{fontSize:'32px',marginBottom:'10px'}}>Uploads</Typography>
        <Stack spacing={1}>
        <Typography variant='h6' sx={{fontSize:'18px',}} >Tên Sách</Typography>
        <TextField id="outlined-basic" label="Hãy điền tên sách" variant="outlined" sx={{height:'35',width:'250'}}/>
        </Stack>
        <Stack spacing={1}>
        <Typography variant='h6' sx={{fontSize:'18px',}} >Tác Giả</Typography>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" sx={{fontSize:'18px',}} >Tên Tác Giả</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={author}
    label="Tác Giả"
    onChange={handleChange}
    sx={{height:'35',width:'350'}}
  >
    <MenuItem value={10}>Tố Hữu</MenuItem>
    <MenuItem value={20}>Nguyễn Khuyến</MenuItem>
    <MenuItem value={30}>Xuân diệu</MenuItem>
  </Select>
</FormControl>
        </Stack>
        <Stack spacing={1}>
        <Typography variant='h6' sx={{fontSize:'18px',}} >Hình Ảnh</Typography>
        <Button variant="contained" component="label">
        Upload a file
        <input type="file" onChange={fileSelectedHandle} hidden multiple/>
        </Button>
        <Box sx={{width:'50px',height:'50px'}} component={'img'} src={image}>

        </Box>
        </Stack>
        <Stack spacing={1}>
        <Typography variant='h6' sx={{fontSize:'18px',}} >Giá</Typography>
        <TextField id="outlined-basic" label="hãy thêm giá vào sách" variant="outlined" sx={{height:'35',width:'350'}} />
        </Stack>
        <Stack spacing={1}>
        <Typography variant='h6' sx={{fontSize:'18px',}} >Mô Tả</Typography>
        <TextField id="outlined-basic" label="hãy thêm mô tả về sách" variant="outlined" sx={{height:'35',width:'250'}} />
        </Stack>
        <Stack spacing={1}>
        <Button variant="outlined" sx={{marginTop:'30px',width:'300px',height:'50px',marginLeft:'300px'}}>Submit</Button>
        </Stack>
    </Box>
    /*<div>
      <h1>Uploads</h1>
      <div className="data-form">
        <form action="">
        <div className="element">
            <h4>Tên Sách:</h4>
            <input type="text" name="name" />
        </div>
        <div className="element">
            <h4>Chon Tác Giả:</h4>
            <select name="author" id="author">
             <option value="name author1">Name author</option>
             </select>
        </div>
        <div className="element">
            <h4>Hình Ảnh:</h4>
            <input type="text" name="images" />
        </div>
        <div className="element">
            <h4>Giá:</h4>
            <input type="text" name="price" />
        </div>
        <div className="element">
            <h4>Mô Tả:</h4>
            <input type="text" name="discription" />
        </div>
        </form>
      </div>
    </div>
    **/
  );
}
