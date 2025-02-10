import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import ShopNowCard from '../../shared/ShopNow';



const ShopNow = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.SHOPNOWS],
        queryFn: async () => await getAPiData('shopnows?populate=*')
    })

    return (

    <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 items-stretch">
          {data?.data?.map((el, index) => (
            <ShopNowCard
              key={index}
              ImageSrc={`http://localhost:1337${el.image.url}`}
              title={el.title}
              desc={el.desc}
            />
          ))}
        </div>
      </div>
      
    )
}

export default ShopNow