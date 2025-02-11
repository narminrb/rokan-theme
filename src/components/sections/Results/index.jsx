import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import ResultsCard from '../../shared/ResultsCard';



const Results = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.RESULTS],
        queryFn: async () => await getAPiData('results?populate=*')
    })

    return (

    <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-stretch">
          {data?.data?.map((el, index) => (
            <ResultsCard
              key={index}
              ImageSrc={`http://localhost:1337${el.image.url}`}
              HoverImageSrc={el.hoverimage?.url ? `http://localhost:1337${el.hoverimage.url}` : null}
              title={el.title}
              desc={el.desc}
              price={el.price}
            />
          ))}
        </div>
      </div>
      
    )
}

export default Results