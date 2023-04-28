import { Box, Typography } from "@mui/material";
import { useState } from "react";

export interface IUploadsProps {
}
export default function Details(props: IUploadsProps) {
    const [image, setImage] = useState('');
    //test image
    setImage("https://avatars.githubusercontent.com/u/91894488?s=60&v=4");
    return (
        <Box >
            <Box sx={{backgroundColor:'white'}}>
                <Box sx={{ width: '200px', height: '200px' ,display:'none'}} component={'img'} src={image}>
                </Box>
            </Box>
            <Typography variant='h1' sx={{ fontSize: '32px', marginBottom: '10px' }}>Uploads</Typography>
        </Box>
    );
}
