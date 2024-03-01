// "use client"

import GetAllPosts from "@/api/GetAllPosts";
import Link from "next/link";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import CardComponent from "@/components/Card";

export default async function Page() {
  const all_posts = await GetAllPosts();
  console.log('All posts =======> ', all_posts);
  return (
    <div>
      <Container>
        <h2 className="text-center">
          All Blogs
        </h2>
        <Row className="d-flex justify-content-center">

          {all_posts.map(post =>
            <Col md={4} className="my-2">
              <CardComponent title={post.title} description={post.body}/>
            </Col>
          )}

        </Row>
      </Container>
    </div>
  )
}

