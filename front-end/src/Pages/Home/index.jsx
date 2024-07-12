import { useContext } from "react";
import BlogContent from "../../Components/blog-content";
import { GlobalContext } from "../../context";
export default function Home() {
  const { blogs } = useContext(GlobalContext);
  return (
    <div className="flex  items-center justify-center">
      <BlogContent blogs={blogs} />
    </div>
  );
}
