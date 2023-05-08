import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RichText from "../common/ricktext";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
export interface IUploadBookDialogProps {
  open: boolean;
  setOpen: any;
}

export default function UploadBookDialog(props: IUploadBookDialogProps) {
  const { open, setOpen } = props;
  const [description, setDescription] = useState("");
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleClose = () => {
    setOpen(false);
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
              <TextField variant="outlined" placeholder="Nhập tên sách...." />
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
                <Autocomplete
                  disablePortal
                  options={top100Films}
                  renderInput={(params) => <TextField {...params} />}
                />{" "}
              </Stack>
              <Stack flex={1}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: "#000" }}
                >
                  {" "}
                  Tác giả
                </Typography>
                <Autocomplete
                  disablePortal
                  options={top100Films}
                  renderInput={(params) => <TextField {...params} />}
                />{" "}
              </Stack>
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
        <Button onClick={handleClose} autoFocus variant="outlined">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}
