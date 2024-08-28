import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

   margin-top: -7.5rem; 

  td {
    font-size: 25px;
    padding: 1.25rem 2rem;
    text-transform: uppercase;
    background: ${props => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:first-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;