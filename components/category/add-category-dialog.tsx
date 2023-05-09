import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import RichText from "../common/ricktext";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
export interface IAddCategoryDialogProps {
  open: boolean;
  setOpen: any;
}

export default function AddCategoryDialog(props: IAddCategoryDialogProps) {
  const { open, setOpen } = props;
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} fullWidth={true} maxWidth="md">
      <DialogTitle sx={{ bgcolor: "#eee" }}>
        {"Thêm thể Loại"}{" "}
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
              Tên thể loại
            </Typography>
            <TextField variant="outlined" placeholder="Nhập tên thể loại...." />
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
        <Button onClick={handleClose} autoFocus variant="outlined">
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
}
