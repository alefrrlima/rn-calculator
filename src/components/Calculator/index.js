import React from 'react';
import styled from 'styled-components';

export default function () {
   const Calculator = styled.View`
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px;
   `;

   const Text = styled.Text``;

   return (
      <Calculator>
         <Text>Alexandre Ferreira Lima</Text>
      </Calculator>
   );
}
