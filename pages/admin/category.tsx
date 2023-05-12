import { generalApi } from "@/api-client";
import { AdminLayout } from "@/components";
import AddCategoryDialog from "@/components/category/add-category-dialog";
import CategoryItem from "@/components/category/category";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
export interface ICategoryPageProps {}

export default function CategoryPage(props: ICategoryPageProps) {
  const [open, setOpen] = useState(false);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
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
    fetchApi();
  }, []);
  return (
    <Stack p={5} bgcolor={"#fff"} minHeight={"90vh"}>
      <Stack justifyContent={"end"} direction={"row"}>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
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
      <Card sx={{ mt: 4 }}>
        <TableContainer sx={{ maxHeight: "70vh" }}>
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
                <TableCell align={"left"} width={5}>
                  STT
                </TableCell>

                <TableCell align={"left"}>Tên thể loại</TableCell>
                <TableCell align={"left"}>Mô tả</TableCell>

                <TableCell align={"left"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categorys.map((item: any, index) => (
                <CategoryItem
                  categorys={categorys}
                  setCategorys={setCategorys}
                  id={item.id}
                  key={index}
                  index={index}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <AddCategoryDialog
        categorys={categorys}
        setCategorys={setCategorys}
        open={open}
        setOpen={setOpen}
      />
    </Stack>
  );
}

CategoryPage.Layout = AdminLayout;
