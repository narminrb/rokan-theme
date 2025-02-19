import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SwiperCard from '../../shared/SwiperCard';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import './style.css';
import SwiperModal from '../swiperModal';

export default function CustomSwiper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SWIPERS],
    queryFn: async () => await getAPiData('swipers?populate=*'),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleOpenModal = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null); 
  };

  return (
    <div className="container mx-auto my-10 px-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
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
              slug={el.slug}
              price={el.price}
              rating={el.rating}
              onSearchClick={() => handleOpenModal(el)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && modalData && (
        <div className="modal" onClick={handleCloseModal}>
          <div  onClick={(e) => e.stopPropagation()}>
            <SwiperModal modalData={modalData} closeModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}
