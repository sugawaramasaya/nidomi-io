// src/app/(me)/mypage/page.tsx

import dynamic from "next/dynamic";

const MyPage = dynamic(() => import("@/components/MyPageClient"), {
  ssr: false,
});

export default function Page() {
  return <MyPage />;
}
