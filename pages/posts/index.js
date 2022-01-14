import React from 'react';
import Layout from "../../components/Layout";
import {Card} from "react-bootstrap";
import {getPosts} from "../../lib/post";

const About = ({ posts}) => {

    return (
        <Layout>
            <h1>Post list</h1>

            {posts.map(post => (
                <Card key={post.id}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                </Card>

            ))}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = await getPosts()

    return {
        props: {
            posts
        }
    }
}

export default About;
