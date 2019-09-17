import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.7rem 1rem;
  & > .ui.table thead tr:first-child > th {
    position: sticky !important;
    top: 0;
    z-index: 20;
    background-color: white;
  }
`;

export const IconClick = styled.span`
  cursor: pointer;
  margin: 0.3rem;
`;
