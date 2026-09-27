import styled from "styled-components";

export const ProjectCardStyled = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  background-color: #d9d9d9;
  text-transform: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    left: 0.75rem;
    bottom: 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary};
  }
`;
