import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import io from "./socket.io-2.2.0";
export interface TestProps {}
let socket: any;
const SocketCustom = (Props: TestProps) => {
  useEffect(() => {
    // if (!profile?.id) return;
    socket = io(BACK_END_SOCKET_URL);
    console.log("vào");

    // socket.on("connect", function (t: any) {
    //   console.log("connect", t);
    //   if (profile?.id) {
    //     console.log("join", profile?.id);
    //     socket.emit("join", profile?.id);
    //   }
    // });
    socket.on("disconnect", function () {
      console.log("disconnect");
    });

    socket.on("notification", function (data: any) {
      console.log("message", data);
    });
  }, []);

  return <></>;
};
export default memo(SocketCustom);
