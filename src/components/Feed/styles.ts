import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TabProps {
  enabled?: boolean;
}

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;
  flex-grow: 1;

  font-size: 15px;

  outline: 0;
  cursor: pointer;
  border-bottom: 1px solid var(--gray);
  color: var(--gray);

  ${(props: TabProps) =>
    props.enabled &&
    css`
      font-weight: bold;
      color: var(--twitter);
      border-bottom: 2px solid var(--twitter);
    `}

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
