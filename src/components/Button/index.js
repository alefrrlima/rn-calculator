import React from "react";

import styled from "styled-components";

export default function () {
  const Button = styled.TouchableOpacity`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    border: 1px #000 solid;
    background-color: #fff;
    --n: 4;
    --g: 10px;
    width: (100% / --n)-(((--n-1) * --g) / --n);
  `;
}
