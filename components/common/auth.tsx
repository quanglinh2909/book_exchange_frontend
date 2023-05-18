import { generalApi } from "@/api-client";
import { setLoading, setUser } from "@/redux/index";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export interface AuthAminProps {
  children: any;
}

export function Auth({ children }: AuthAminProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await generalApi.profile();
        console.log(data);
        dispatch(setLoading(false));
        dispatch(setUser(data));
        if (!data?.id) {
          router.push("/login");
          return;
        }
      } catch (error) {
        router.push("/login");
      }
    })();
  }, []);

  return <div>{children}</div>;
}
