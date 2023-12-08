import React from 'react';
import styled from 'styled-components';

export default function () {
   const Display = styled.View`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      gap: 10px;
   `;

   const Result = styled.Text`
      font-family: 'RobotoMono-Light';
      font-size: 44px;
      line-height: 45px;
      color: #f8f8f2;
      text-align: right;
      width: 100%;
   `;

   const Formula = styled.Text`
      font-family: 'Roboto-Light';
      font-size: 20px;
      line-height: 25px;
      color: #f8f8f2;
      text-align: right;
      width: 100%;
   `;

   return (
      <Display>
         <Formula>20 + 20</Formula>
         <Result>9.000.000.000</Result>
      </Display>
   );
}
