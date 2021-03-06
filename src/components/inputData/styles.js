import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 420px;
  background: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;


export const Header = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.5rem;

  border-bottom: 1px solid whitesmoke;

  & > span {
    font: 1rem 'Roboto', sans-serif;
    font-weight: 700;
    -webkit-font-smoonthing: antialiased !important;
  }
`;


export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
`;
