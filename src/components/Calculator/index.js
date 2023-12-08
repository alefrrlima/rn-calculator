import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Display from '../Display';

export default function () {
   const Calculator = styled.View`
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 10px;
      background-color: #282a36;
      gap: 10px;
      width: 395px;
   `;

   const Buttons = styled.View`
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
   `;

   return (
      <Calculator>
         <Display />
         <Buttons>
            <Button value="AC" color="red" />
            <Button value="DEL" />
            <Button value="%" />
            <Button value="/" color="purple" />
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="*" color="purple" />
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="-" color="purple" />
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button value="+" color="purple" />
            <Button value="0" size="double" />
            <Button value="." />
            <Button value="=" color="orange" />
         </Buttons>
      </Calculator>
   );
}
