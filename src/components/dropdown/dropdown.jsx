import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/shadcn/accordion';

function Dropdown({ item }) {
	return (
		<Accordion
			type='single'
			collapsible
			className='w-50 pt-3'
			defaultValue='item-1'
		>
			<AccordionItem value='item-1'>
				<AccordionTrigger>Filtering Product</AccordionTrigger>
				<AccordionContent className='flex flex-col gap-4 text-balance'>
					<p>Produk 1</p>
					<p>Produk 2</p>
					<p>Produk 3</p>
					<p>Produk 4</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export { Dropdown };
