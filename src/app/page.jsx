import { CardProduk } from "@/components/card/card-produk";
import { Dropdown } from "@/components/dropdown/dropdown";
import { Search } from "@/components/search/search";
import { cardProduct } from "@/utils/contants";
import Form from 'next/form'


export default function App() {
  return (
    <div className='container mx-auto'>
        <header className='text-lg text-center pt-4'>
            Manajemen Produk
            <Search />
            <Dropdown />
        </header>
        <div className="grid grid-cols-4 justify-center gap-8 pt-8">
        {cardProduct.map((item, index) => (
            <CardProduk key={index} item={item}/>
        ))}
        </div>
    </div>
  )
}
