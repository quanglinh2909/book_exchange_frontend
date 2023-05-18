import { generalApi } from "@/api-client";
import {
  Box,
  Grid,
  MenuItem,
  Typography,
  Stack,
  Button,
  Avatar,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Collapse,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddPhotoAlternate } from "@mui/icons-material";
import { useRouter } from "next/router";
import SendIcon from "@mui/icons-material/Send";
export interface IDetailProps {}
import { useEffect, useState } from "react";
import { CommentPayLoad } from "@/models/general";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { setUser } from "@/store";
export default function Detail(props: IDetailProps) {
  const onClickShow = () => {
    setDescription(book.bookDescribe.replace("&nbsp;", " "));
    setExpand(true);
  };
  const onClickLess = () => {
    setDescription(
      book.bookDescribe.substring(0, 500).replace("&nbsp;", " ") + "..."
    );
    setExpand(false);
  };
  const profile = useSelector((state: any) => state.user);
  const handleComment = async () => {
    if (comment === "") return;

    // const payload:CommentPayLoad={
    //   content:comment,
    //   idUser:,
    //   idBook:
    // }
    try {
      // const { data } = await generalApi.createComment(payload);
      // if (data && data.errors == null) {
      // }
    } catch (error: any) {
      const { errors } = error.response.data;
      let message = "";
      for (const key in errors) {
        message += errors[key];
        break;
      }
    }
  };
  const router = useRouter();
  const { idBook } = router.query;
  const [book, setBook] = useState<any>();
  const base64Flag = "data:image/jpeg;base64,";
  const [isfavorite, setIsFavorite] = useState(false);
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([]);
  const [expand, setExpand] = useState<boolean | undefined>();
  const user = useSelector((state: any) => state.user);
  const dispath = useDispatch();
  if (idBook !== undefined) {
    useEffect(() => {
      const fetch = async () => {
        const { data } = await generalApi.getBook(Number(idBook));
        setBook(data);
        console.log(data);
        console.log(user);
        if (
          user.follows.filter((b: any) => b.bookId === data.bookId).length > 0
        ) {
          setIsFavorite(true);
        }
        setDescription(
          data.bookDescribe.length > 500
            ? data.bookDescribe.substring(0, 500).replace("&nbsp;", " ") + "..."
            : data.bookDescribe.replace("&nbsp;", " ")
        );
        setExpand(data.bookDescribe.length > 500 ? false : undefined);
      };
      fetch();
    }, []);
  }
  const favorite = async () => {
    try {
      const { data } = await generalApi.favorite(book.bookId);
      if (data && data.errors == null) {
        const { data: profile } = await generalApi.profile();
        dispath(setUser(profile));
        setIsFavorite(true);
      } else if (data?.errors?.errorMessage) {
        enqueueSnackbar(data?.errors?.errorMessage, { variant: "error" });
      }
    } catch (error: any) {
      //get message error
      const { errors } = error.response.data;
      let message = "";
      for (const key in errors) {
        message += errors[key];
        break;
      }
      enqueueSnackbar(message, { variant: "error" });
    }
  };
  const unfavorite = async () => {
    try {
      const { data } = await generalApi.unfavorite(book.bookId);
      if (data && data.errors == null) {
        const { data: profile } = await generalApi.profile();
        dispath(setUser(profile));
        setIsFavorite(false);
      } else if (data?.errors?.errorMessage) {
        enqueueSnackbar(data?.errors?.errorMessage, { variant: "error" });
      }
    } catch (error: any) {
      //get message error
      const { errors } = error.response.data;
      let message = "";
      for (const key in errors) {
        message += errors[key];
        break;
      }
      enqueueSnackbar(message, { variant: "error" });
    }
  };
  return book !== undefined ? (
    <Stack
      sx={{
        background: "#fff",
        padding: "20px",
        height: "100%",
        marginBottom: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12}>
          <Box
            component="img"
            sx={{ objectFit: "cover" }}
            src={base64Flag + book.productImages[0]?.picByte}
          ></Box>
        </Grid>
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          sx={{
            paddingTop: "10px",
            "& h5": {
              lineHeight: "2.0",
            },
            "& p": {
              lineHeight: "2.0",
            },
          }}
        >
          <Stack sx={{ width: "100%", height: "100%" }}>
            <Typography
              sx={{ fontSize: "1em", fontWeight: "600" }}
              variant="h5"
            >
              {book.bookName}
            </Typography>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "0.8em",
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                Thể loại:
              </Typography>
              <Typography sx={{ fontSize: "0.85em" }}>
                {book.category}
              </Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "0.8em",
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                }}
              >
                Tác giả:
              </Typography>
              <Typography sx={{ fontSize: "0.85em" }}>{book.author}</Typography>
            </Stack>
            <Stack sx={{}}>
              <Typography
                sx={{
                  fontSize: "0.8em",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                Giới thiệu:
              </Typography>
              <Typography sx={{ fontSize: "0.85em" }}>{description}</Typography>
              {!(expand === undefined) &&
                (!expand ? (
                  <Typography
                    onClick={onClickShow}
                    sx={{ color: "#1976d2", cursor: "pointer" }}
                  >
                    Xem thêm
                  </Typography>
                ) : (
                  <Typography
                    onClick={onClickLess}
                    sx={{ color: "#1976d2", cursor: "pointer" }}
                  >
                    Thu gọn
                  </Typography>
                ))}
            </Stack>
            <Stack sx={{ flexDirection: "row", marginTop: "16px" }}>
              <Button
                sx={{
                  backgroundColor: "#222 !important",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "100",
                  "&:hover": {
                    backgroundColor: "#000 !important",
                  },
                }}
              >
                Yêu cầu đổi sách
              </Button>
              <Button
                endIcon={<FavoriteIcon />}
                onClick={() => {
                  isfavorite ? unfavorite() : favorite();
                }}
                sx={{
                  backgroundColor: isfavorite
                    ? "#f16464 !important"
                    : "#ed9191 !important",

                  "& svg": {
                    color: isfavorite ? "#ff0101" : "#fff",
                  },
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: "100",
                  marginLeft: "5px",
                }}
              >
                Yêu thích
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid container width="100%">
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          sx={{
            marginTop: "24px",
            borderRadius: "16px",
            background: "rgba(156,156,156,0.1)",
            padding: "24px",
          }}
        >
          <Stack sx={{ color: "#000", fontWeight: "600" }}>
            <Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  marginTop: "12px",
                  "& svg": {
                    width: "40px",
                    height: "40px",
                  },
                }}
              >
                <Avatar />
                <Stack
                  sx={{
                    padding: "12px",
                    flexGrow: "1",
                    marginLeft: "16px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(145, 158, 171, 0.16)",
                  }}
                >
                  <Stack>
                    <Typography variant="h6">Lainey Davidson</Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75em",
                        color: "rgb(145, 158, 171)",
                      }}
                    >
                      05 Apr 2023
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#000" }}>
                    Praesent venenatis metus at
                    ffffffffffffffffffffffffffffffffffffffffffffffffffff
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  flexDirection: "row",
                  marginTop: "12px",
                  "& svg": {
                    width: "40px",
                    height: "40px",
                  },
                }}
              >
                <Avatar />
                <Stack
                  sx={{
                    padding: "12px",
                    flexGrow: "1",
                    marginLeft: "16px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(145, 158, 171, 0.16)",
                  }}
                >
                  <Stack>
                    <Typography variant="h6">Lainey Davidson</Typography>
                    <Typography
                      sx={{
                        fontSize: "0.75em",
                        color: "rgb(145, 158, 171)",
                      }}
                    >
                      05 Apr 2023
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#000" }}>
                    Praesent venenatis metus at
                    ffffffffffffffffffffffffffffffffffffffffffffffffffff
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <Avatar />
              <OutlinedInput
                placeholder="Nhập comment..."
                value={comment}
                onChange={(e: any) => setComment(e.target.value)}
                sx={{
                  paddingLeft: "12px",
                  marginLeft: "16px",
                  height: "40px",
                  flexGrow: "1",
                  borderRadius: "8px",
                  "& input": {
                    color: "#000",
                  },
                  "& fieldset": {
                    border: "none",
                  },
                  border: "1px solid rgba(145, 158, 171, 0.32)",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SendIcon
                        sx={{
                          color: "rgb(145, 158, 171)",
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  ) : (
    <Stack></Stack>
  );
}
