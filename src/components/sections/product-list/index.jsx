import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import ProductCard from '../../shared/ProductCard';


const ProductListSection = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: async () => await getAPiData('products?populate=*')
    })

    return (
        <div className="container mx-auto my-20">
            <h1 className="text-3xl font-bold">
                Product List
            </h1>
            <div className='grid grid-cols-4 gap-4 items-stretch'>
              {data && data?.data?.map((el, index) => (
                <ProductCard
                  key={index}
                  name={el.name}
                  ImageSrc={`http://localhost:1337${el.image.url}`}
                  title={el.title}
                  price={el.price}
                  image={el.image}
                />
              ))}

            </div>
        </div>
    )
}

export default ProductListSection