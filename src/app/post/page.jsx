import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Post() {
	const [post, setPost] = useState();

	const fetchRecords = async () => {
		const response = await axios.get('http://localhost:5000/cardProducts');
		setPost(response.data);
	};

	useEffect(() => {
		fetchRecords();
	}, []);
	return (
		<div>
			<Link href='/post/create'>Add product</Link>
		</div>
	);
}
