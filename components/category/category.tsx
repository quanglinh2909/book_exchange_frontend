import MoreVertIcon from "@mui/icons-material/MoreVert";
import { TableCell, TableRow, Typography } from "@mui/material";
export interface ICategoryItemProps {}

export default function CategoryItem(props: ICategoryItemProps) {
  return (
    <TableRow hover tabIndex={-1} role="checkbox">
      <TableCell align="center">1</TableCell>

      <TableCell component="th" scope="row" padding="none" sx={{ pl: 1 }}>
        Hoàng Quang Linh
      </TableCell>

      <TableCell align="left">
        <Typography
          sx={{
            fontSize: "17px",
            width: { xs: "100%", sm: "50%" },
            color: "#43434390",
          }}
          dangerouslySetInnerHTML={{
            __html: "09887767666",
          }}
        ></Typography>
      </TableCell>

      <TableCell align="right">
        <MoreVertIcon />
      </TableCell>
    </TableRow>
  );
}
