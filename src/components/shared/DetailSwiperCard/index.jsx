import React from 'react'
import { DetailSwiperBody, DetailSwiperContainer, DetailSwiperDescription, DetailSwiperImage, DetailSwiperImageContainer } from '../../ui/detailSwiperCard'

const DetailSwiperCard = ({ ImageSrc, title }) => {
    return (
        <DetailSwiperContainer>
            <DetailSwiperImageContainer>
                <DetailSwiperImage src={ImageSrc} />
            </DetailSwiperImageContainer>
            <DetailSwiperBody>
            <div className="text-[#111111] text-sm  uppercase pt-2">Post by Bersky Bersky-May 25 2024</div>
                <DetailSwiperDescription>
                    {title}
                </DetailSwiperDescription>
            </DetailSwiperBody>
        </DetailSwiperContainer>
    )
}

export default DetailSwiperCard
