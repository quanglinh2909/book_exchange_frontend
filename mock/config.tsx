// component
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GridViewIcon from "@mui/icons-material/GridView";
import CategoryIcon from "@mui/icons-material/Category";
import Person3Icon from "@mui/icons-material/Person3";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const navConfig = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    Icon: GridViewIcon,
  },
  {
    title: "user",
    path: "/admin/user",
    Icon: AccountBoxIcon,
  },
  {
    title: "Category",
    path: "/admin/category",
    Icon: CategoryIcon,
  },
  {
    title: "Author",
    path: "/admin/author",
    Icon: Person3Icon,
  },
  {
    title: "Book",
    path: "/admin/book",
    Icon: MenuBookIcon,
  },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default navConfig;
