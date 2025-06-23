import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-[var(--surface)]">
      <AuthForm
        isLogin={true}
        buttonLabel="ログイン"
        className="w-full max-w-[480px] px-[var(--space-24)]"
      />
    </div>
  );
}
