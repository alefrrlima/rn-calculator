import React from 'react';

import { Dimensions } from 'react-native';

import styled from 'styled-components';

export default function Button({ onPress, value, size, color }) {
   const n = 4;
   const g = 10;
   const p = 10;

   const singleSize =
      (Dimensions.get('window').width - p * 2) / n - ((n - 1) * g) / n;

   const doubleSize = singleSize * 2 + g;

   const CustomButton = styled.TouchableOpacity`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border-radius: 10px;
      width: ${size === 'double' ? doubleSize : singleSize}px;
      height: ${singleSize}px;
      background-color: ${() => {
         switch (color) {
            case 'purple':
               return '#6272A4';
            case 'orange':
               return '#FFB86C';
            case 'red':
               return '#FF5555';
            default:
               return '#44475A';
         }
      }};
   `;

   const Value = styled.Text`
      font-family: 'Roboto-Medium';
      font-size: 22px;
      line-height: 25px;
      color: #f8f8f2;
      text-align: center;
      width: 100%;
   `;

   return (
      <CustomButton onPress={onPress}>
         <Value>{value}</Value>
      </CustomButton>
   );
}
