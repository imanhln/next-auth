import styles from "./profile.module.css";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";

const Profile = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{session?.user?.name}</h1>
      <h2 className={styles.subtitle}>{session?.user?.email}</h2>
      {session?.user?.image && (
        <img
          src={session?.user?.image}
          className={styles.avatar}
          alt="Avatar"
        />
      )}
      <button className={styles.button}>
        <Link href="/api/auth/signout">Sign Out</Link>
      </button>
    </div>
  );
};

export default Profile;
