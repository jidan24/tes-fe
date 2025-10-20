import Image from 'next/image';
import { Button } from '../shadcn/button';

const {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardAction,
	CardFooter,
	CardContent,
} = require('../shadcn/card');

function CardProduk({ item }) {
	return (
		<div className='flex justify-center'>
			<Card>
				<CardHeader>
					<CardTitle>{item.tittle}</CardTitle>
					<CardDescription>{item.desc}</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={item.image}
						width={300}
						height={300}
						alt='Product'
					/>
				</CardContent>
				<CardDescription className='px-5'>{item.stock}</CardDescription>
				<CardFooter>{item.price}</CardFooter>
				<CardAction className='px-5'>
					<Button>Keranjang</Button>
				</CardAction>
			</Card>
		</div>
	);
}

export { CardProduk };
