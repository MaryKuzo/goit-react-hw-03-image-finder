import styled from '@emotion/styled'


export const List = styled.ul`
    display: grid;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 240px;
  grid-gap: 12px;
  justify-content: center;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`
