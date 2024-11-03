import { useAppSelector } from '@/app/lib/hooks';
import Card from './Card';
import CardNew from './CardNew';

export interface Product {
  id: any;
  nameProduct: string;
  images: string[];
  weight: number;
  description: string;
  price: number;
  category: string;
}

function Cards() {
  const data = useAppSelector((state: any) => state.ProductState.data);
  
  console.log('Data:', data);
  console.log('Type of data:', typeof data);

  return (
    <div className='w-[90%] grid grid-cols-4 gap-8'>
      {Array.isArray(data) && data.map((product: Product, index: number) => (
        <Card
          key={index}
          id={product.id}
          nameProduct={product.nameProduct}
          images={product.images}
          weight={product.weight}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}
      <CardNew />
    </div>
  );
}

export default Cards;

