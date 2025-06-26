// src/hooks/useFirebaseAuth.ts
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export const useFirebaseAuth = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const extendedSession = session as any;
    if (
      status === "authenticated" &&
      !auth.currentUser &&
      extendedSession?.idToken
    ) {
      const credential = GoogleAuthProvider.credential(extendedSession.idToken);
      signInWithCredential(auth, credential);
    }
  }, [session, status]);
};
