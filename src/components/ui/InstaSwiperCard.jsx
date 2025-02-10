import { styled } from "styled-components";

export const InstaSwiperContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

export const InstaSwiperImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InstaSwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out, filter 0.4s ease-in-out;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0); 
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: background 0.4s ease-in-out, opacity 0.4s ease-in-out;
`;

export const InstaIcon = styled.i`
  width:60px;
  height:60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
  cursor:pointer;
  color: black;
  font-weight: 400;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
`;

export const InstaSwiperImageContainerWithHover = styled(InstaSwiperImageContainer)`
  &:hover {
    ${InstaSwiperImage} {
      transform: scale(1.1);
      filter: brightness(0.8); 
    }
    
    ${Overlay} {
      background: rgba(0, 0, 0, 0.1); 
      opacity: 1;
    }
  }
`;
