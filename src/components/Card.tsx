import styled from '@emotion/styled';

const CardContainer = styled.div`
    width: 240px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: solid 1px #707070;
    cursor: pointer;

    &:hover{
        background-color: 
        #378b646c
    }
`;
interface CardProps {
    title: string;
    onClick: ()=> void
}

const Card = ({title, onClick}: CardProps) => {
  return <CardContainer onClick={onClick}>{title}</CardContainer>;
};

export default Card;
