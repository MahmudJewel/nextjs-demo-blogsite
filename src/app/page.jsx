"use client"
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
        <Row className="d-flex justify-content-center">
          <Col md={4} className="m-2">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Link href="/blog">
                    <Button variant="primary">
                      Blogs
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {/* ========= */}
          <Col md={4} className="m-2">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Link href="/blog">
                    <Button variant="primary">
                      Blogs
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {/* ========== */}
          <Col md={4} className="m-2">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Link href="/blog">
                    <Button variant="primary">
                      Blogs
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {/* ======== */}
          <Col md={4} className="m-2">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>

                  <Link href="/blog">
                    <Button variant="primary">
                      Blogs
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
