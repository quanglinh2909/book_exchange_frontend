import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import RichText from "../common/ricktext";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import { useRef, useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { generalApi } from "@/api-client";
import { BookPayload } from "@/models/book";
import { useSelector } from "react-redux";
export interface IUploadBookDialogClientProps {
  open: boolean;
  setOpen: any;
  setBooks: Function;
  books: Array<any>;
}

export default function UploadBookDialogClient(
  props: IUploadBookDialogClientProps
) {
  const { open, setOpen } = props;
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [imageBook, setImage] = useState<File>();
  const [categorys, setCategorys] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const userLogin = useSelector((state: any) => state.user);
  const handleClose = () => {
    setOpen(false);
  };
  const fileRef = useRef(null);
  const fileAttachmentSelectedHandler = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleClick = (ref: any) => {
    ref.current.click();
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await generalApi.getAllCategory();
        if (data && data.errors == null) {
          setCategorys(data);
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
    const fetchAuthor = async () => {
      try {
        const { data } = await generalApi.getAllAuthor();
        if (data && data.errors == null) {
          setAuthors(data);
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
    fetchCategory();
    fetchAuthor();
  }, []);
  const handleUpload = () => {
    if (name === "") {
      enqueueSnackbar("Tên sách không được để trống", { variant: "error" });
      return;
    }
    if (author === "") {
      enqueueSnackbar("Tên tác giả không được để trống", { variant: "error" });
      return;
    }
    if (category === "") {
      enqueueSnackbar("Tên thể loại không được để trống", { variant: "error" });
      return;
    }

    if (imageBook == undefined) {
      enqueueSnackbar("Vui lòng chọn ảnh cho sách", { variant: "error" });
      return;
    }
    const formData: any = new FormData();
    const file: any = imageBook;
    const newFile: any = new File([file], file.name, { type: file?.type });
    formData.append("image", newFile);
    // formData.append('frontendUrl', frontendUrl);
    const payload: BookPayload = {
      name: name,
      description: description,
      authorName: author,
      idUserCreate: Number(userLogin.id),
      idCategory: Number(category),
    };
    formData.append("book", JSON.stringify(payload));
    try {
      generalApi.createBook(formData).then(function (response: any) {
        if (response && response.errors == null) {
          enqueueSnackbar("Thêm thành công", { variant: "success" });
          props.setBooks([...props.books, response]);
          setName("");
          setAuthor("");
          setCategory("");
          setDescription("");
          setImage(undefined);
          // console.log(response);
          // const base64Flag = "data:image/jpeg;base64,";
          // setDemo(base64Flag + response.productImages[0].picByte);
          handleClose();
        } else if (response?.errors?.errorMessage) {
          enqueueSnackbar(response?.errors?.errorMessage, { variant: "error" });
          // props.setIsAdd(false);
        }
      });
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

  return (
    <Dialog open={open} fullWidth={true} maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#eee" }}>
        {"Thêm sách"}{" "}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ mt: 3 }}>
        <DialogContentText>
          <Stack spacing={2}>
            <Stack>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "#000" }}
              >
                {" "}
                Tên sách
              </Typography>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                placeholder="Nhập tên sách...."
              />
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <Stack flex={1}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#000" }}
                >
                  {" "}
                  Thể loại
                </Typography>
                <Select
                  value={category}
                  sx={{
                    fontWeight: "600",
                    color: "#000",
                  }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  {categorys.map((item: any, index) => (
                    <MenuItem key={index} value={item.id + ""}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              <Stack flex={1}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#000" }}
                >
                  {" "}
                  Tác giả
                </Typography>
                <TextField
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  variant="outlined"
                  placeholder="Nhập tên tác giả..."
                />
              </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "#000" }}
              >
                {" "}
                Thêm ảnh
              </Typography>
              <Box
                sx={{
                  appearance: "none",
                  display: "none",
                }}
                component={"input"}
                type="file"
                ref={fileRef}
                onChange={(e) => {
                  fileAttachmentSelectedHandler(e);
                }}
              />
              <Button
                onClick={() => handleClick(fileRef)}
                sx={{
                  marginTop: "8px",
                  textTransform: "none",
                  backgroundColor: "#f1f1f1 !important",
                  "&:hover": {
                    backgroundColor: "#cbcbcb !important",
                  },
                }}
              >
                {imageBook != undefined ? (
                  <Typography>{imageBook.name}</Typography>
                ) : (
                  <ImageIcon sx={{ color: "#000" }} />
                )}
              </Button>
            </Stack>
            <Stack mt={2}>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", color: "#000" }}
              >
                Mô tả
              </Typography>
              <RichText
                onChange={(t: string) => setDescription(t)}
                description={description}
              />
            </Stack>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleUpload} autoFocus variant="outlined">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}
