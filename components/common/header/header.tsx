import { Stack, Avatar, Badge, Typography, Grid } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useRef, useState } from "react";
import { generalApi } from "@/api-client";
import { SearchPayLoad } from "@/models/general";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const router = useRouter();
  const [name, setName] = useState("Name");
  const base64Flag = "data:image/jpeg;base64,";
  const [description, setDescription] = useState(
    "Descriptionfffffffffffffffffffffffffffffffffffdd"
  );
  const [keyword, setKeyWork] = useState("");
  const [results, setResults] = useState([]);
  const search = async (keyword: string) => {
    setKeyWork(keyword);
    if (keyword == "") {
      setResults([]);
      return;
    }
    const payload: SearchPayLoad = {
      keyword: keyword,
    };
    const { data } = await generalApi.search(payload);
    setResults(data);
    console.log(data);
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      p={"10px 16px"}
      position={"sticky"}
      top={0}
      zIndex={100}
      bgcolor={"rgb(216,221,222)"}
    >
      <Stack sx={{ position: "relative" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            value={keyword}
            onChange={(e) => search(e.target.value)}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Nhập tên sách, tác giả, thể loại..."
          />
          {results.length !== 0 && (
            <Grid
              container
              sx={{
                position: "absolute",
                top: "50px",
                width: "100%",
                left: "0",
                background: "#fff",
                padding: "10px",
              }}
            >
              {results.map((item: any, index) => (
                <Grid
                  key={index}
                  md={12}
                  lg={12}
                  sm={12}
                  item
                  sx={{
                    height: "50px",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#ece8e8",
                    },
                  }}
                >
                  <Stack
                    sx={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Avatar src={base64Flag + item.productImages[0].picByte} />
                    <Stack sx={{ marginLeft: "10px" }}>
                      <Typography>{item.bookName}</Typography>
                      <Typography>
                        {item.bookDescribe.length > 25
                          ? item.bookDescribe.substring(0, 24) + "..."
                          : item.bookDescribe}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider sx={{ color: "#000", width: "100%" }} />
                </Grid>
              ))}
            </Grid>
          )}
        </Paper>
      </Stack>
      <Stack
        direction={"row"}
        color={"#637381"}
        alignItems={"center"}
        spacing={2}
      >
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>
        <Avatar sx={{ width: "35px", height: "35px" }} />
      </Stack>
    </Stack>
  );
}
