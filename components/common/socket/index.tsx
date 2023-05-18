import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import io from "./socket.io-2.2.0";
export interface TestProps {}
let socket: any;
const SocketCustom = (Props: TestProps) => {
  const profile = useSelector((state: any) => state.user);
  const dispath = useDispatch();
  useEffect(() => {
    if (!profile?.id) return;
    socket = io("http://localhost:4100", { transports: ["websocket"] } as any);

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
    });
  }, [profile?.id]);

  return <></>;
};
export default memo(SocketCustom);
