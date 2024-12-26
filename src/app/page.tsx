"use client";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  const goToProfile = () => {
    router.push("/profile");
  };
  return (
    <div>
      <button onClick={goToProfile}>Profile</button>
    </div>
  );
}
