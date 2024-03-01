// "use client"
import GetSinglePost from "@/api/GetSinglePost"
import { Container } from "react-bootstrap"


async function BlogDetails({params}) {
    const {id} = params;
    const post = await GetSinglePost(id);
    console.log('post ==> ', post)
    return (
        <div>
            <Container>
                <h1 className="text-center">{post.title}</h1>
                <p>
                    {post.body}
                </p>
            </Container>
        </div>
    )
}

export default BlogDetails