// Figma Dev Mode MCPサーバー用APIエンドポイント（雛形）

import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import axios from "axios";

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

async function fetchFigmaNode(fileId: string, nodeId: string, token: string) {
  const url = `https://api.figma.com/v1/files/${fileId}/nodes?ids=${nodeId}`;
  const res = await axios.get(url, {
    headers: { "X-Figma-Token": token },
  });
  return res.data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET /api/figma-mcp?fileId=...&nodeId=...
  if (req.method === "GET") {
    const { fileId, nodeId } = req.query;
    const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
    if (!fileId || !nodeId || !token) {
      return res
        .status(400)
        .json({ error: "Missing fileId, nodeId, or token" });
    }
    try {
      const data = await fetchFigmaNode(
        fileId as string,
        nodeId as string,
        token
      );
      return res.status(200).json(data);
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "Unknown error";
      return res.status(500).json({ error: errorMessage });
    }
  }

  // POST (Webhook)は従来通り
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST", "GET"]);
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
