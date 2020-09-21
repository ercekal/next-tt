import React from 'react';
import styled from 'styled-components'

interface ResultItem {
  artistName: string;
  trackName: string;
  collectionName: string;
}

interface ResultItemProps {
  item: ResultItem;
  key: number;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  padding: 5px 0;
  margin: 5px;
`

const ResultItem = ({ item }: ResultItemProps) => {
  const { artistName, trackName, collectionName } = item
  return (
    <Div>
      <p>Artist: {artistName}</p>
      <p>Song Name: {trackName}</p>
      <p>Album: {collectionName}</p>
    </Div>
  );
};

export default ResultItem;