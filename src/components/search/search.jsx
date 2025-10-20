'use client';

import { useQueryState } from 'nuqs';
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';

function Search({ placeholder = 'Search' }) {
	const [name, setName] = useQueryState('name');
	return (
        <div className='flex gap-4 pt-4'>
			<div className="relative w-full">
				<i className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
				<Input 
					placeholder={placeholder}
					className='w-full pl-10 pr-4 rounded-lg bg-gray-100 border border-transparent hover:border-[2px] hover:border-black transition-colors duration-200' 
					value={name || ''} 
					onChange={(e) => setName(e.target.value)}
                    />
			</div>
			<Button 
				className='hover:bg-white hover:text-primary transition-colors duration-200 hover:border-black hover:border-[2px] bg-primary rounded-md font-semibold text-white cursor-pointer' 
				onClick={() => setName(null)}
                >
				<span>Clear</span>
			</Button>
        </div>
	);
}

export { Search };