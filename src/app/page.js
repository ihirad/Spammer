import Messages from "@/Components/Msgs";
import PostMessage from "@/Components/Post";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>Spammer</h1>
      <PostMessage />
      <Messages />
    </main>
  );
}
