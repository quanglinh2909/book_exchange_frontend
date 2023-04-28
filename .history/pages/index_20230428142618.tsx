import Image from "next/image";
import { Inter } from "next/font/google";
import { Stack } from "@mui/material";
// import BodyHome from "@/components/container/bodyhome";
import { MainLayout } from "@/components";
import BodyHomeMain from "@/components/container/bodyhomemain";

export default function Home() {
  return (
    <Stack sx={{ overflowX: "hidden", padding:'0' }}>
      <BodyHomeMain />
    </Stack>
  );
}
Home.Layout = MainLayout;
