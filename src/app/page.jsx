// "use client"
import Image from "next/image";
import styles from "./page.module.css";
import "@/assets/css/home.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container >
        <br />
        <h1 className="text-center">Welcome to Blog Home Page</h1>
        <p>This is a dammy project using Nextjs(Stable app router). You can explore new app router, Nextjs Link properties etc.</p> <br /> 
        <b><big>Features:</big></b>
        <ul>
          <li>Router</li>
          <li>Dynamic router</li>
          <li>Nextjs Link property</li>
          <li>Server Side Component</li>
          <li>Client Side component</li>
          <li>Data fetching</li>
          <li>Lazy loading</li>
          <li>Custom Error page</li>
          <li>Parallel request(fetch) handling using Promise</li>
        </ul>
        <br />
        <Row className="d-flex justify-content-center">
          {/* ======== */}
          <Col md={4} className="m-2">
            <div>
              <Link href="/blog">
                <div className="btn btn-success">Explore now</div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
