import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import RichText from "../common/ricktext";
import CloseIcon from "@mui/icons-material/Close";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { generalApi } from "@/api-client";
import { AuthorPayload } from "@/models/general";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store";
export interface IUpdateAuthorDialogProps {
  open: boolean;
  setOpen: any;
  name: string;
  description: string;
  id: string;
  authors: Array<any>;
  setAuthors: Function;
}

export default function UpdateAuthorDialog(props: IUpdateAuthorDialogProps) {
  const { open, setOpen } = props;
  const [description, setDescription] = useState(props.description);
  const [name, setName] = useState(props.name);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = async () => {
    if (name === "") {
      enqueueSnackbar("Tên tác giả không được để trống", { variant: "error" });
      return;
    }
    dispatch(setLoading(true));
    const payload: AuthorPayload = {
      id: Number(props.id),
      name: name,
      description: description,
    };
    try {
      const { data } = await generalApi.updateAuthor(payload);
      if (data && data.errors == null) {
        enqueueSnackbar("Sửa thành công", { variant: "success" });
        const newArray = props.authors.filter((e) => e.id !== props.id);

        props.setAuthors([...newArray, data]);
        setOpen(false);
      } else if (data?.errors?.errorMessage) {
        enqueueSnackbar(data?.errors?.errorMessage, { variant: "error" });
      }
    } catch (error: any) {
      const { errors } = error.response.data;
      let message = "";
      for (const key in errors) {
        message += errors[key];
        break;
      }
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <Dialog open={open} fullWidth={true} maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#eee" }}>
        {"Thêm tác giả"}{" "}
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
          <Stack>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#000" }}
            >
              {" "}
              Tên tác giả
            </Typography>
            <TextField
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              variant="outlined"
              placeholder="Nhập tên tác giả...."
            />
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
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        <Button onClick={handleUpdate} autoFocus variant="outlined">
          Cập nhật
        </Button>
      </DialogActions>
    </Dialog>
  );
}
