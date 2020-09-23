import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';
import firebase from "firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    db
    .collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map(doc => (
                {id: doc.id, data: doc.data()}
            ))))
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post key={post.id}
                image={post.data.image}
                profilePic={post.data.profilePic}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message={post.data.message}
                />
            ))}

            {/* <Post image="https://i.pinimg.com/564x/e6/35/23/e6352375501d9530b81326d0c94db91d.jpg" profilePic="https://i.pinimg.com/564x/f4/1f/e3/f41fe384dd173f91201f622e11be8a31.jpg" username="Anthos" timestamp="date" message="example"/>
            <Post image="https://i.pinimg.com/564x/e6/35/23/e6352375501d9530b81326d0c94db91d.jpg" profilePic="https://i.pinimg.com/564x/f4/1f/e3/f41fe384dd173f91201f622e11be8a31.jpg" username="Anthos" timestamp="date" message="example"/> */}
        </div>
    )
}

export default Feed
