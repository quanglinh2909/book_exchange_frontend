import BlogPostCard from "@/components/book/BlogPostCard";
import UploadBookDialog from "@/components/book/upload-book-dialog";
import Main2Layout from "@/components/common/layout/main2";
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { generalApi } from "@/api-client";
import UploadBookDialogClient from "@/components/book/upload-book-dialog-client";
import { useSelector } from "react-redux";
export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const [open, setOpen] = useState(false);
  const user: any = useSelector((state: any) => state.user);
  // const post = {
  //   cover: "/assets/images/covers/cover_1.jpg",
  //   title: "How to create a blog",
  //   view: 999,
  //   comment: 888,
  //   share: 777,
  //   author: {
  //     name: "Minh Nguyen",
  //     avatarUrl: `/assets/images/avatars/avatar_1.jpg`,
  //   },
  // };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await generalApi.getAllBookUser(user.id);
        if (data && data.errors == null) {
          setBooks(data);
        }
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
    <Stack sx={{ bgcolor: "#fff" }} p={"20px 20px"}>
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Stack></Stack>
        <Button
          variant="contained"
          sx={{
            bgcolor: "rgb(25, 118, 210) !important",
            textTransform: "none",
            width: "fit-content",
          }}
          endIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Đăng tải
        </Button>
      </Stack>
      <Grid
        container
        spacing={3}
        mt={5}
        sx={{
          height: "75vh",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            // outline: '1px solid slategrey',
          },
        }}
      >
        {books.map((item: any, index) => (
          <BlogPostCard key={index} post={item} index={0} />
        ))}
        <UploadBookDialogClient
          books={books}
          setBooks={setBooks}
          open={open}
          setOpen={setOpen}
        />
      </Grid>
    </Stack>
  );
}

BookPage.Layout = Main2Layout;
