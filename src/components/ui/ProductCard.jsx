import { styled } from "styled-components"

export const ProductContainer = styled.div`
    border: 1px solid #f0f0f0;
    width: 100%;
`

export const ProductImageContainer = styled.div`
width: 100%;
height: 400px;
overflow: hidden;
`

export const ProductImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition: .4s ease-in-out;
&:hover{
    transform: scale(1.1);
    transition: all 0.5s;
}
    
`

export const ProductHeader = styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
    color:${props => props.color ? props.color : '#333'};

`

export const ProductPrice = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
`

export const ProductDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #666;
    margin-top: 8px;
    
`

export const ProductBody = styled.div`
    padding: 12px;
`

export const ProductButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 10px;
`

export const ProductButton = styled.button`
  background-color: ${props => props.bgcolor || '#333'};
  color: ${props => props.color || '#fff'};
  padding: 8px 16px;
  border: ${props => props.bgcolor && props.bgcolor !== '#333' ? `1px solid ${props.bgcolor}` : 'none'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: ${props => props.bgcolor ? '#555' : '#222'};
  }
`;
