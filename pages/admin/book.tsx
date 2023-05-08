import { AdminLayout } from "@/components";
import BlogPostCard from "@/components/book/BlogPostCard";
import { Button, Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
export interface IBookPageProps {}

export default function BookPage(props: IBookPageProps) {
  // cover, title, view, comment, share, author, createdAt
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
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập tên sách..." />
        </Paper>
        <Button
          variant="contained"
          sx={{
            bgcolor: "rgb(25, 118, 210) !important",
            textTransform: "none",
            width: "fit-content",
          }}
          endIcon={<AddIcon />}
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
    </Stack>
  );
}

BookPage.Layout = AdminLayout;
