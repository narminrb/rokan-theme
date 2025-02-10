import React from 'react'
import { SwiperBody, SwiperContainer, SwiperDescription, SwiperImage, SwiperImageContainer, SwiperText } from '../../ui/SwiperCard'

const SwiperCard = ({ ImageSrc, title,desc }) => {
    return (
        <SwiperContainer>
            <SwiperImageContainer>
                <SwiperImage src={ImageSrc} />
            </SwiperImageContainer>
            <SwiperBody>
                <SwiperDescription>
                    {title}
                </SwiperDescription>
                <SwiperText>
                    {desc}
                </SwiperText>
            </SwiperBody>
        </SwiperContainer>
    )
}

export default SwiperCard