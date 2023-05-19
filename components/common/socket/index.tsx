import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import io from "./socket.io-2.2.0";
import { setCommentList, setNotify } from "@/store";
import store from "@/store/store";
export interface TestProps {}
let socket: any;
const SocketCustom = (Props: TestProps) => {
  const profile = useSelector((state: any) => state.user);
  const notify: any = useSelector((state: any) => state.notify.listNotify);
  const commentList = useSelector((state: any) => state.comment.listComment);
  const dispath = useDispatch();
  useEffect(() => {
    if (!profile?.id) return;
    socket = io("http://localhost:4100/chat");

    socket.on("connect", function (t: any) {
      console.log("connect");
      if (profile?.id) {
        console.log("join", profile?.id);
        socket.emit("join", profile?.id);
      }
    });
    socket.on("disconnect", function () {
      console.log("disconnect");
    });

    socket.on("notification", function (data: any) {
      console.log("message", data);
      dispath(setNotify([...notify, data]));
    });
    socket.on("comment", async function (data: any) {
      let arr = [...store.getState().comment.listComment, data];
      await dispath(setCommentList(arr));
      console.log(store.getState().comment.listComment);
    });
  }, [profile?.id]);

  return <></>;
};
export default memo(SocketCustom);
