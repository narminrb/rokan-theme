import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import {Navigation } from 'swiper/modules'; 
import SwiperCard from '../../shared/SwiperCard';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api'; 
import './style.css'; 


export default function CustomSwiper() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SWIPERS],
    queryFn: async () => await getAPiData('swipers?populate=*')
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-10 px-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
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
        <SwiperCard
          ImageSrc={`http://localhost:1337${el.image?.url}`}
          HoverImageSrc={el.hoverimage?.url ? `http://localhost:1337${el.hoverimage.url}` : null}
          desc={el.desc}
          price={el.price}
          rating={el.rating}
        />
      </SwiperSlide>
    ))}

      </Swiper>
    </div>
  );
}
