import { AdminLayout } from "@/components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Stack,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Checkbox,
  TableCell,
  TableBody,
  Avatar,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface IUserPageProps {}

export default function UserPage(props: IUserPageProps) {
  return (
    <Stack>
      <Card>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table>
            <TableHead
              sx={{
                bgcolor: "#F4F6F8",
                "& .MuiTableCell-root": {
                  color: "#212B36",
                  fontWeight: "bold",
                  fontSize: "15px",
                  lineHeight: "18px",
                  padding: "16px 20px",
                },
              }}
            >
              <TableRow>
                <TableCell align={"left"}>Họ tên</TableCell>
                <TableCell align={"left"}>Số điện thoại</TableCell>

                <TableCell align={"left"}>ngày sinh</TableCell>
                <TableCell align={"left"}>Email</TableCell>
                <TableCell align={"left"}>Địa chỉ</TableCell>

                <TableCell align={"left"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover tabIndex={-1} role="checkbox">
                <TableCell component="th" scope="row" padding="none">
                  <Stack direction="row" alignItems="center" spacing={2} ml={1}>
                    <Avatar />
                    <Typography variant="subtitle2" noWrap>
                      Hoàng Quang Linh
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell align="left">{"0355536733"}</TableCell>

                <TableCell align="left">{"29/09/2000"}</TableCell>

                <TableCell align="left">linh@gmail.com</TableCell>
                <TableCell align="left">
                  {"quỳnh bảng, quỳnh lưu, nghệ an"}
                </TableCell>
                <TableCell align="right">
                  <MoreVertIcon />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Stack>
  );
}

UserPage.Layout = AdminLayout;
