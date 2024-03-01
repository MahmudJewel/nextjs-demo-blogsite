"use client"
import { Container, Card, Button } from "react-bootstrap";
import Link from "next/link";

function CardComponent({title, description}) {
    const title_length = title.length
    const body_length = description.length
    if (title_length>20){
        title = title.slice(0,20) + '...'
    }
    if (body_length>100){
        description = description.slice(0,100) + '...'
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

                <Link href="/blog">
                    <Button variant="primary">
                        Details
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CardComponent