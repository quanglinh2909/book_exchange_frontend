import { generalApi } from "@/api-client";
import Main2Layout from "@/components/common/layout/main2";
import { PATH_API } from "@/constants";
import { Box, Grid, MenuItem, Stack, Typography,Button } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IUploadsProps {
}
export default function Details(props: IUploadsProps) {
    const router = useRouter();
    const { bookId } = router.query;
    const [book,setBook] = useState<any>();
    //const [image, setImage] = useState("https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg");
    const [isfavorite, setIsFavorite] = useState(false);
    /*const handleImage = (event:any) => {
            setImage(event.target.src);
    }*/
    useEffect(() => {
      const fetch = async () => {
        try {
          const { data } = await generalApi.getBook(Number(bookId));
          /*const { data: listNotify } = await generalApi.getAllNotify(
            data.userCreate.id
          );*/        
          setBook(data);
        } catch (error: any) {
          const { errors } = error.response.data;
          let message = "";
          for (const key in errors) {
            message += errors[key];
            break;
          }
          enqueueSnackbar(message, { variant: "error" });
        }
      };
      fetch();
    }, []);
    return (
        <Box sx={{ backgroundColor: 'white',display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'start', paddingTop:'10%' ,height:'500px'}}>
            <Box sx={{ display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                <Box sx={{ width: '200px', height: '250px', display: 'block' }} component={'img'} src={PATH_API + book.image}>
                </Box>
                {/* 
                <Grid container rowSpacing={0} columnSpacing={{ xs: 0.1, sm: 0.5, md: 0 }} sx={{marginTop:'10px'}}>
                    <Grid item sx={{height:'100px',width:'auto',paddingLeft:'5px'}}>                   
                      <MenuItem>
                        <Box onMouseOver={handleImage} sx={{ width: '30px', height: '35px' }} component={'img'} src={"https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg"}></Box>
                      </MenuItem>       
                    </Grid>
                </Grid>
                */}
            </Box>
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant='h2' sx={{ fontSize: '32px'}}>Tên Sách: {book.Name}</Typography>
                <Typography sx={{ marginTop:'10px'}}>Tác Giả: {book.author}</Typography>
                <Typography sx={{ marginTop:'10px'}}>Thể Loại: {book.type}</Typography>
                <Stack spacing={1} sx={{ marginTop:'10px',border:'1px solid blue',height:'120px', padding:'10px', borderRadius:'15px'}}>
                <Typography sx={{}} >Mô tả:</Typography>
                <Typography sx={{ fontSize: '14px'}} >{book.description}</Typography>
                </Stack>
                <Stack spacing={1} sx={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                  <Button variant="outlined" sx={{ width: '55%', height: '45%' }}>Yeu Cau Trao Doi</Button>
                </Stack>
                
            </Box>
            
        </Box>
    );
}
Details.Layout = Main2Layout;