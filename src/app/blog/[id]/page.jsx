// "use client"
import GetComments from "@/api/GetComments";
import GetSinglePost from "@/api/GetSinglePost"
import { Container } from "react-bootstrap"
import "@/assets/css/blogdetails.css"

async function BlogDetails({ params }) {
    const { id } = params;
    const postPromise = GetSinglePost(id);
    const commentsPromise = GetComments(id);

    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    return (
        <div>
            <Container>
                <br />
                <h1 className="text-center">{post.title}</h1> <br />
                <h3>
                    {post.body}
                </h3>
                <br /> <br />

                <div className=" comment">
                    <h3 className="text-center">Comment section</h3>
                    {comments.map(comment =>
                        <p key={comment.id} >
                            name: {comment.email} <br />
                            comment: {comment.body}
                            <hr />
                        </p>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default BlogDetails