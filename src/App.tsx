import styled from '@emotion/styled';
import Card from './components/Card';
import React, { useEffect, useState } from 'react';
import Edit from './components/Edit';
import Memo from './interfaces/Memo';
import Cookies from 'js-cookie';
import {RiDeleteBin6Line} from '@react-icons/all-files/ri/RiDeleteBin6Line'


const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;

`

const PlusCard = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  gap: 40px;
  font-size: 48px;
  align-items: center;
  justify-content: center;
  border: solid 1px #707070;
  box-sizing: border-box;
  padding-bottom: 15px;
  margin: 80px 20px;
  cursor: pointer;
`;

function App() {
  console.log(Cookies.get('memo'));
  const [mode, setMode] = useState<'edit' | 'view'>('view')
  
  const [memoList, setMemoList] = useState<Memo[]>([]);
  const [selectedMemoIdx, setSelectedMemoIdx] = useState<number | null>(null);
  
  useEffect(() => {
    const memo = JSON.parse((Cookies.get('memo') ?? null)!);
     const memoList: Memo[] = memo ?? [];

    setMemoList(memoList)
  },[mode])
  return (
    <>
      {mode === 'view' && (
        <CardContainer>
          {memoList.map((memo, idx) => (
            <Card
              key={idx}
              onClick={() => {
                setSelectedMemoIdx(idx);
                setMode('edit');
              }}
              title={memo.title}
            />
          ))}
          <PlusCard
            onClick={() => {
              setSelectedMemoIdx(null);
              setMode('edit');
            }}
          >
            +
          </PlusCard>
          <PlusCard
            onClick={() => {
              setSelectedMemoIdx(null);
              setMemoList([])
              Cookies.remove('memo')
            }}
          >
            <RiDeleteBin6Line/>
          </PlusCard>
        </CardContainer>
      )}
      {mode === 'edit' && <Edit setMode={setMode} memoIdx={selectedMemoIdx} />}
    </>
  );
}

export default App;
