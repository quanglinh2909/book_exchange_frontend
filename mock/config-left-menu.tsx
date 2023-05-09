// component
import SaveIcon from "@mui/icons-material/Save";
import GradeIcon from "@mui/icons-material/Grade";
import CategoryIcon from "@mui/icons-material/Category";
import Person3Icon from "@mui/icons-material/Person3";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
const configLeftMenu = [
  {
    title: "Home",
    path: "/home",
    Icon: HomeIcon,
  },
  {
    title: "Yêu thích",
    path: "/favourite",
    Icon: GradeIcon,
  },
  {
    title: "Đã lưu",
    path: "/save-book",
    Icon: SaveIcon,
  },
  {
    title: "Tác giả",
    path: "/author",
    Icon: Person3Icon,
  },
  {
    title: "Sách của tôi",
    path: "/book",
    Icon: MenuBookIcon,
  },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default configLeftMenu;
