import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Picker from "../tydligval";

describe("tydligval", () => {
  const onSelect = jest.fn();
  const items = [
    {
      id: 1,
      value: "test1",
      label: "Test 1",
    },
    {
      id: 2,
      value: "test2",
      label: "Test 2",
    },
  ];

  describe("with default interface", () => {
    test("render component with no data", () => {
      const shallow = new ShallowRenderer();
      shallow.render(<Picker />);
      const result = shallow.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test("render component with data", () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      const result = shallow.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test("renders the default trigger buttons", () => {
      const shallow = new ShallowRenderer();
      const onPress = jest.fn();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      const trigger = shallow._instance.triggerButton(items, onPress);
      const select = shallow._instance.selectButton(items[0]);
      const close = shallow._instance.closeButton(items[0]);
      expect(trigger).toMatchSnapshot();
      expect(select).toMatchSnapshot();
      expect(close).toMatchSnapshot();
    });

    test("triggers the overlay", () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      shallow._instance.onPress();
      expect(shallow._instance.state.isOverlayOn).toEqual(true);
    });

    test("removes the overlay", () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      shallow._instance.onClose();
      expect(shallow._instance.state.isOverlayOn).toEqual(false);
    });

    test("triggers the onSelect", () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      shallow._instance.onSelect(items[1]);
      expect(onSelect).toBeCalled();
      expect(shallow._instance.state.isOverlayOn).toEqual(false);
      expect(shallow._instance.state.selectedItem).toEqual(items[1]);
    });

    test("triggers the onSelect by using the button", () => {
      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
        />
      );
      const Button = shallow._instance.selectButton(items[0]);

      const shallow0 = new ShallowRenderer();
      shallow0.render(Button);
      const result = shallow0.getRenderOutput();

      result.props.onPress();

      expect(onSelect).toBeCalledWith(items[0]);
    });
  });
  describe("with custom interface", () => {
    test("render component with data", () => {
      const triggerMock = jest.fn();
      const selectButton = jest.fn();
      const closeButton = jest.fn();

      const shallow = new ShallowRenderer();
      shallow.render(
        <Picker
          source={{
            uri:
              "https://img.freepik.com/free-vector/technology-background-with-gradient-colors_23-2147837710.jpg?size=338c&ext=jpg",
          }}
          key="picker-one"
          onSelect={selected => onSelect(selected)}
          items={items}
          triggerButton={triggerMock}
          selectButton={selectButton}
          closeButton={closeButton}
        />
      );
      const result = shallow.getRenderOutput();
      shallow._instance.onPress();
      shallow._instance.closeButton();
      expect(result).toMatchSnapshot();
      shallow._instance.onSelect(items[1]);
    });
  });
});
