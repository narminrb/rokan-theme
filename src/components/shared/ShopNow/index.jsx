import React from 'react'
import { ShopNowBody, ShopNowContainer, ShopNowDescription, ShopNowImage, ShopNowImageContainer, ShopNowText } from '../../ui/ShopNow'

const ShopNowCard = ({ ImageSrc, title,desc }) => {
    return (
        <ShopNowContainer>
            <ShopNowImageContainer>
                <ShopNowImage src={ImageSrc} />
            </ShopNowImageContainer>
            <ShopNowBody>
                <ShopNowDescription>
                    {title}
                </ShopNowDescription>
                <ShopNowText>
                    {desc}
                </ShopNowText>
            </ShopNowBody>
        </ShopNowContainer>
    )
}

export default ShopNowCard