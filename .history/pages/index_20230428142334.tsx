import Image from "next/image";
import { Inter } from "next/font/google";
import { Stack } from "@mui/material";
import BodyHome from "@/components/container/bodyhome";
import { MainLayout } from "@/components";

export default function Home() {
  return (
    <Stack sx={{ overflowX: "hidden" }}>
      <BodyHome />
    </Stack>
  );
}
Home.Layout = MainLayout;
