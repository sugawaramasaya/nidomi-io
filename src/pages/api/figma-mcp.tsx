// Figma Dev Mode MCPサーバー用APIエンドポイント（雛形）

import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

// Figma Webhookの署名検証
function verifySignature(req: NextApiRequest, secret: string) {
  const signature = req.headers["x-figma-signature"];
  if (!signature || !secret) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const body =
    typeof req.body === "string" ? req.body : JSON.stringify(req.body);
  hmac.update(body);
  const digest = hmac.digest("hex");
  return signature === digest;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const secret = process.env.FIGMA_WEBHOOK_SECRET || "";
  if (!verifySignature(req, secret)) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  // Figmaからのリクエストボディをパース
  const event = req.body;
  // ここでイベント種別ごとに処理を分岐
  if (event && event.event_type) {
    // 例: ファイル更新イベント
    if (event.event_type === "FILE_UPDATE") {
      // 必要に応じてFigma APIへアクセス
      return res
        .status(200)
        .json({ message: "ファイル更新イベントを受信しました" });
    }
    // 他のイベントもここで分岐可能
  }
  res.status(200).json({ message: "Figma MCPサーバーが動作しています。" });
}
