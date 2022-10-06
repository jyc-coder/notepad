import styled from '@emotion/styled';

const CardContainer = styled.div`
    width: 240px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: solid 1px #707070;
`;
interface CardProps {
  title: string;
}

const Card = ({title}: CardProps) => {
  return <CardContainer>{title}</CardContainer>;
};

export default Card;
