import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperCard from '../../shared/SwiperCard';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; // ✅ Ensure you import your API function

export default function CustomSwiper() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SWIPERS],
    queryFn: async () => await getAPiData('swipers?populate=*')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-10">
      <Swiper
        slidesPerView={4} 
        spaceBetween={5}  
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.data?.map((el, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              ImageSrc={`http://localhost:1337${el.image.url}`}
              title={el.title}
              desc={el.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
