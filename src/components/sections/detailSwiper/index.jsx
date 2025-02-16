import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import {Navigation } from 'swiper/modules'; 
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import DetailSwiperCard from '../../shared/DetailSwiperCard';


export default function DetailSwiper() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.DETAILSWIPERS],
    queryFn: async () => await getAPiData('detailswipers?populate=*')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <div className="swiper-button-next custom-swiper-button"></div>
        <div className="swiper-button-prev custom-swiper-button"></div>
            {data?.data?.map((el, index) => (
      <SwiperSlide className="font-worksans" key={index}>
        <DetailSwiperCard
          ImageSrc={`http://localhost:1337${el.image?.url}`}
          title={el.title}
        />
      </SwiperSlide>
    ))}

      </Swiper>
    </div>
  );
}
