import styled from '@emotion/styled';
import Card from './components/Card';
import React, { useState } from 'react';
import Edit from './components/Edit';


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
  margin: 80px;
  cursor: pointer;
`;

function App() {
  const [mode,setMode] = useState<'edit' | 'view'>('view')
  return (
    <>
      {mode === 'view' && (
        <CardContainer>
          <Card title="hello" />
          <Card title="hello" />
          <Card title="hello" />
          <Card title="hello" />
          <Card title="hello" />
          <PlusCard onClick={() => setMode('edit')}>+</PlusCard>
        </CardContainer>
      )}
      {mode === 'edit' && (
      
          <Edit setMode={setMode}/>
        
      )}
    </>
  );
}

export default App;
