import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import LikesCard from '../../shared/LikesCard';



const LikesStuff = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.LIKES],
        queryFn: async () => await getAPiData('likes?populate=*')
    })

    return (

    <div className="container mx-auto my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-1 items-stretch">
          {data?.data?.map((el, index) => (
            <LikesCard
              key={index}
              ImageSrc={`http://localhost:1337${el.image.url}`}
              title={el.title}
            />
          ))}
        </div>
      </div>
      
    )
}

export default LikesStuff