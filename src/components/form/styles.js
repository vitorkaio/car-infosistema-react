import styled from 'styled-components';

export const Container = styled.form`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


export const InputCss = styled.div`
  margin: 0.5rem 0;
  flex: 1;
  width: 80%;
  padding: 0 0.6rem;

`;


export const SubmitButton = styled.div`
  margin-bottom: 0.9rem;
  flex: 1;
  width: 50%;
  padding: 0 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const FormError = styled.div`
  margin-bottom: 0.9rem;
  flex: 1;
  width: 50%;
  padding: 0 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    color: red;
  }
`;
