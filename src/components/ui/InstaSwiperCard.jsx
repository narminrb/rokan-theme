import { styled } from "styled-components";

export const InstaSwiperContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative; 
  overflow: hidden;
`;

export const InstaSwiperImageContainer = styled.div`
  width: 100%;
  height: 370px;
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

export const InstaSwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;
`;


export const InstaSwiperBody = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;


export const InstaSwiperImageContainerWithHover = styled(InstaSwiperImageContainer)`
  &:hover {
    ${InstaSwiperImage} {
      transform: scale(1.1);
    }
  }
`;
