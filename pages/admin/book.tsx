import { generalApi } from "@/api-client";
import { AdminLayout } from "@/components";
import BlogPostCard from "@/components/book/BlogPostCard";
import UploadBookDialog from "@/components/book/upload-book-dialog";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { enqueueSnackbar } from "notistack";
import { useState, useEffect } from "react";
export interface IBookAdminPageProps {}

export default function BookAdminPage(props: IBookAdminPageProps) {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await generalApi.getAllBook();
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
        {books.map((item: any, index) => (
          <BlogPostCard key={index} post={item} index={0} />
        ))}

        <Grid item xs={12} md={12}></Grid>
      </Grid>
      <UploadBookDialog
        books={books}
        setBooks={setBooks}
        open={open}
        setOpen={setOpen}
      />
    </Stack>
  );
}

BookAdminPage.Layout = AdminLayout;
