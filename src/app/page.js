import Messages from "@/Components/Msgs";
import PostMessage from "@/Components/Post";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Spammer</h1>
      <PostMessage />
      <Messages />
    </main>
  );
}
