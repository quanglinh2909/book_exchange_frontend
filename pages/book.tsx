import BlogPostCard from "@/components/book/BlogPostCard";
import UploadBookDialog from "@/components/book/upload-book-dialog";
import Main2Layout from "@/components/common/layout/main2";
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  const [open, setOpen] = useState(false);
  const post = {
    cover: "/assets/images/covers/cover_1.jpg",
    title: "How to create a blog",
    view: 999,
    comment: 888,
    share: 777,
    author: {
      name: "Minh Nguyen",
      avatarUrl: `/assets/images/avatars/avatar_1.jpg`,
    },
  };
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
          Thêm
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
        <BlogPostCard post={post} index={0} />
        <BlogPostCard post={post} index={1} />
        <BlogPostCard post={post} index={2} />
        <BlogPostCard post={post} index={3} />
        <BlogPostCard post={post} index={4} />
        <BlogPostCard post={post} index={5} />
        <BlogPostCard post={post} index={6} />
        <BlogPostCard post={post} index={7} />
        <Grid item xs={12} md={12}></Grid>
      </Grid>
      <UploadBookDialog open={open} setOpen={setOpen} />
    </Stack>
  );
}

BookPage.Layout = Main2Layout;
