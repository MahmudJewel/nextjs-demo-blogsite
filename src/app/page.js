import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import GetAllPosts from "@/api/GetAllPosts";
// import NavScrollExample from "@/components/Navbar";

export default function Home() {
  const all_posts = GetAllPosts();
  console.log('All posts=======> ', all_posts);
  return (
    <>
      <Container >
        <h1 className="text-center">
          Hello world
        </h1>
        <div>
          {/* {all_posts.map((post)=>{
            <li key={post.id}>
              post.title
            </li>
          })} */}
        </div>
      </Container>
    </>
  );
}
