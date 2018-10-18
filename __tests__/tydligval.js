import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Picker from '../tydligval.js';

describe('tydligval', () => {
  const onSelect = jest.fn();
  const items = [
    {
      id: 1,
      value: 'test1',
      label: 'Test 1',
    },
    {
      id: 2,
      value: 'test2',
      label: 'Test 2',
    },
  ];

  describe('with default interface', () => {
    test('render component with no data', () => {
      const shallow = new ShallowRenderer();
      shallow.render(<Picker />);
      const result = shallow.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test('render component with data', () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              'https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg',
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />,
      );
      const result = shallow.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });
});
