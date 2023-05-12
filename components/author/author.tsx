import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { enqueueSnackbar } from "notistack";
import { generalApi } from "@/api-client";
import UpdateAuthorDialog from "./update-author-dialog";

export interface IAuthorItemProps {
  index: number;
  name: string;
  description: string;
  id: string;
  authors: Array<any>;
  setAuthors: Function;
}

export default function AuthorItem(props: IAuthorItemProps) {
  const [openAction, setOpenAction] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = (e: any) => {
    setOpenAction((prevOpen) => !prevOpen);
  };
  const handleCloseDelete = async () => {
    try {
      const { data } = await generalApi.deleteAuthor(props.id);
      if (data && data.errors == null) {
        enqueueSnackbar("Xóa thành công", { variant: "success" });
        const newArray = props.authors.filter((e) => e.id !== props.id);
        props.setAuthors(newArray);
        setOpenDelete(false);
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
    }
    setOpenDelete(false);
  };
  const handleCloseAction = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpenAction(false);
  };
  return (
    <TableRow hover tabIndex={-1} role="checkbox">
      <TableCell align="center">{props.index}</TableCell>

      <TableCell component="th" scope="row" padding="none" sx={{ pl: 1 }}>
        {props.name}
      </TableCell>

      <TableCell align="left">
        <Typography
          sx={{
            fontSize: "17px",
            width: { xs: "100%", sm: "50%" },
            color: "#43434390",
          }}
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        ></Typography>
      </TableCell>

      <TableCell align="right" sx={{ position: "relative" }}>
        <Button ref={anchorRef} onClick={(e: any) => handleToggle(e)}>
          <MoreVertIcon
            className="show-icon-setting"
            sx={{ color: "silver" }}
          />
        </Button>

        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            transform: "translateY(calc(100%))",
            right: "10px",
            zIndex: "10",
            display: openAction ? "block" : "none",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseAction}>
              <MenuList
                id="composition-menu"
                aria-labelledby="composition-button"
                autoFocusItem={openAction}
              >
                <MenuItem
                  onClick={(e) => {
                    setOpenUpdate(true);
                    handleCloseAction(e);
                  }}
                >
                  Sửa
                </MenuItem>
                <MenuItem
                  onClick={(e) => {
                    setOpenDelete(true);
                    handleCloseAction(e);
                  }}
                >
                  Xóa
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Box>
      </TableCell>
      <UpdateAuthorDialog
        authors={props.authors}
        setAuthors={props.setAuthors}
        name={props.name}
        description={props.description}
        open={openUpdate}
        setOpen={setOpenUpdate}
        id={props.id}
      />
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Xác nhận xóa ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc chắn muốn xóa tác giả này không ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Không</Button>
          <Button color="error" onClick={handleCloseDelete} autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </TableRow>
  );
}
