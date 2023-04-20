import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("vaoday");
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Not Support!" });
  }
  return new Promise((resolve) => {
    //dont send cookie
    req.headers.cookie = "";

    const handleProxyReqponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";

      proxyRes.on("data", function (chunk) {
        body += chunk;
      });

      proxyRes.on("end", function () {
        try {
          const { token } = JSON.parse(body);
          if (token == null) {
            (res as NextApiResponse)
              .status(500)
              .json({ message: "Login false!" });
            return;
          }

          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV != "development",
          });
          cookies.set("token", token, {
            httpOnly: true,
            sameSite: "lax",
          });

          (res as NextApiResponse)
            .status(200)
            .json({ token: token, message: "Login success!" });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: "Login false!" });
        }

        resolve(true);
      });
    };

    proxy.once("proxyRes", handleProxyReqponse);

    proxy.web(req, res, {
      target: process.env.API_PATH,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
