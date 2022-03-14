import styled from "styled-components";

export const Title = styled.h1`
  color: #c63c22;
`;

export const Subtitle = styled.h2`
  color: ${(props) => (props.isHome ? "lightblue" : "lightgreen")};
  text-decoration: underline;
`;
