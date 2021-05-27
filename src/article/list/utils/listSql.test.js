import React from 'react'
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { getBooksQuery } from './sql'

const mocks = [
  {
    request: {
      query: getBooksQuery,
    },
    result: {
      data: {
        books: [{
          "id": "1",
          "title": "從零開始",
          "author": "雷雲風暴",
          "stars": "3"
        },
        {
          "id": "2",
          "title": "夢靈(原網夢靈游)",
          "author": "箏靈",
          "stars": "4"
        },
        {
          "id": "3",
          "title": "重生之賊行天下",
          "author": "發飆的蝸牛",
          "stars": "5"
        },],
      },
    },
  },
];


it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <div>test</div>
    </MockedProvider>);
});
