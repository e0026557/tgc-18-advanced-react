import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostPage(props) {
	const [activePostId, setActivePostId] = useState('');
	const [post, setPost] = useState(null);

	// IMPORTANT: useEffect cannot be an async function
	// useEffect has 2 arguments
	// 1. the function to call when any of the dependencies changes
	// 2. an array of dependencies
	useEffect(() => {
		const fetchPost = async (postId) => {
			if (postId > 0) {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts/' + postId
				);
				setPost(response.data);
			}
		};
		fetchPost(activePostId);
	}, [activePostId]);

	// Replicate componentDidMount
	useEffect(() => {
		console.log('first render');
	}, []); // empty array means the useEffect only activates once

	return (
		<React.Fragment>
			<h1>Posts</h1>
			<input
				type='text'
				name='activePostId'
				value={activePostId}
				onChange={(event) => {
					setActivePostId(event.target.value);
				}}
			/>

			{post ? (
				<React.Fragment>
					<div>
						<h1>ID: {post.id}</h1>
						<h1>Title: {post.title}</h1>
						<p>{post.body}</p>
					</div>
				</React.Fragment>
			) : null}
		</React.Fragment>
	);
}
