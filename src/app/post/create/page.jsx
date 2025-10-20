'use client';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import axios from 'axios';
import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function page() {
	const [tittle, setTittle] = useState('');
	const [description, setDescription] = useState('');
	const [stock, setStock] = useState('');
	const [price, setPrice] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:5000/cardProducts', {
			tittle,
			description,
			stock,
			price,
		});
		router.push('/');
	};
	return (
		<div className='container mx-auto'>
			<h1 className='py-2 pb-3'>Create new product</h1>
			<div className='flex flex-col justify-center'>
				<Form onSubmit={handleSubmit} className='flex flex-col gap-5'>
					<input type='text' placeholder='tittle' />
					<input type='text' placeholder='description' />
					<input type='text' placeholder='stock' />
					<input type='text' placeholder='price' />
					<Button>Add</Button>
				</Form>
			</div>
		</div>
	);
}
