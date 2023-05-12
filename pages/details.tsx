import { generalApi } from "@/api-client";
import Main2Layout from "@/components/common/layout/main2";
import { setLoading } from "@/store";
import { Box, Grid, MenuItem, Stack, Typography,Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export interface IUploadsProps {
}
export default function Details(props: IUploadsProps) {
    const [image, setImage] = useState("https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg");
    const [book,setBook] = useState("");
    const handleImage = (event:any) => {
            setImage(event.target.src);
    }
/*    const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = async () => {
    dispatch(setLoading(true));

    try {
      if (!book) {
        return;
      }
      const {} = await generalApi.getBookById({
        id:book,
      });
      router.push("/");
    } catch (error: any) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  */
    return (
        <Box sx={{ backgroundColor: 'white',display:'flex',flexDirection:'row',justifyContent:'center', alignItems:'start', paddingTop:'10%' ,height:'500px'}}>
            <Box sx={{ display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                <Box sx={{ width: '200px', height: '250px', display: 'block' }} component={'img'} src={image}>
                </Box>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 0.1, sm: 0.5, md: 0 }} sx={{marginTop:'10px'}}>
                    <Grid item sx={{height:'100px',width:'auto',paddingLeft:'5px'}}>
                        <MenuItem>
                        <Box onMouseOver={handleImage} sx={{ width: '30px', height: '35px' }} component={'img'} src={"https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg"}></Box>
                        </MenuItem>
                    </Grid>
                    <Grid item sx={{height:'auto',width:'auto',paddingLeft:'5px'}}>
                    <MenuItem>
                        <Box onMouseOver={handleImage} sx={{ width: '30px', height: '35px' }} component={'img'} src={"https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg"}></Box>
                        </MenuItem>
                    </Grid>
                    <Grid item sx={{height:'120px',width:'auto',paddingLeft:'5px'}}>
                    <MenuItem>
                        <Box onMouseOver={handleImage} sx={{ width: '30px', height: '35px' }} component={'img'} src={"https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg"}></Box>
                        </MenuItem>
                    </Grid>
                    <Grid item sx={{height:'120px',width:'auto'}}>
                    <MenuItem>
                        <Box onMouseOver={handleImage} sx={{ width: '30px', height: '35px' }} component={'img'} src={"https://sachhaynendoc.net/wp-content/uploads/2019/03/bia-sach-1.jpg"}></Box>
                        </MenuItem>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant='h2' sx={{ fontSize: '32px'}}>Tên Sách: Lịch Sử Việt Nam</Typography>
                <Typography sx={{ marginTop:'10px'}}>Tác Giả: Nhà Xuất Bản Khoa Học</Typography>
                <Typography sx={{ marginTop:'10px'}}>Thể Loại: Lịch Sử</Typography>
                <Stack spacing={1} sx={{ marginTop:'10px',border:'1px solid blue',height:'120px', padding:'10px', borderRadius:'15px'}}>
                <Typography sx={{}} >Mô tả:</Typography>
                <Typography sx={{ fontSize: '14px'}} >fffff</Typography>
                </Stack>
                <Stack spacing={1} sx={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                  <Button variant="outlined" sx={{ width: '55%', height: '45%' }}>Lien he</Button>
                </Stack>
                
            </Box>
            
        </Box>
    );
}
Details.Layout = Main2Layout;