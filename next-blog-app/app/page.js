import BlogItem from "@/Components/BlogItem";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <BlogItem />
      </main>
    </>
  );
}
