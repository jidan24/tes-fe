'use client';

import { useQueryState } from 'nuqs';
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';

function Search({ placeholder = 'Search' }) {
	const [name, setName] = useQueryState('name');
	return (
		<div className='flex gap-4 pt-4'>
			<div className='relative w-full'>
				<i className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'></i>
				<Input
					placeholder={placeholder}
					className='w-full rounded-lg border border-transparent bg-gray-100 pr-4 pl-10 transition-colors duration-200 hover:border-[2px] hover:border-black'
					value={name || ''}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<Button
				className='hover:text-primary bg-primary cursor-pointer rounded-md font-semibold text-white transition-colors duration-200 hover:border-[2px] hover:border-black hover:bg-white'
				onClick={() => setName(null)}
			>
				<span>Clear</span>
			</Button>
		</div>
	);
}

export { Search };
