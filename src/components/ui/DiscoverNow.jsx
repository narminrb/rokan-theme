import { styled } from "styled-components";

export const DiscoverContainer = styled.div`
  border: 1px solid #f0f0f0;
  width: 100%;
  height: 720px;
  position: relative; 
  overflow: hidden;
`;

export const DiscoverImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative; 
`;

export const DiscoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const DiscoverDescription = styled.p`
  position: absolute;
  bottom: 50px; 
  left: 20px; 
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  padding: 8px 12px;
  display: inline-block;
`;

export const DiscoverBody = styled.div`
  padding: 12px 0px;
`;
export const DiscoverText = styled.p`
  position: absolute;
  bottom: 20px; 
  left: 20px; 
  font-size: 1rem;
  font-weight: 400;
  color: white;
  padding: 8px 12px;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px; 
    background-color: white; 
    margin-top: 1px; 
  }
`;
