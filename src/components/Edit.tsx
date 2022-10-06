import styled from '@emotion/styled';
import Button from './Button';

const TitleInp = styled.input``

const ContentInp = styled.textarea`
    height: 360px;
`

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

interface EditProps {
  setMode: (mode: 'edit' | 'view') => void;
}


const Edit = ({ setMode }: EditProps) => {
    return (
      <EditContainer>
        <TitleInp />
        <ContentInp />
        <ButtonContainer>
          <Button onClick={()=>setMode("view")}>뒤로가기</Button>
          <Button>저장</Button>
        </ButtonContainer>
      </EditContainer>
    );         
};

export default Edit;
