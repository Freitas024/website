import styled from "styled-components";

export const TagContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.5rem 1rem;
  gap: 1rem;

  border: solid 1px #7543fe;
  border-radius: 12rem;
  background-color: rgba(117, 67, 254, 0.2);

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: small;
    font-weight: 500;
    white-space: nowrap;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
