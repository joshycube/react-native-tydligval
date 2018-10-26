// @flow

import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  Text,
  Scroller,
  TriggerContainer,
  TriggerLeft,
  TriggerRight,
  CloseTrigger,
  BlurredContainer,
  Close,
} from "./style";
/* istanbul ignore next */
import CloseMe from "./svg/closeMe";
/* istanbul ignore next */
import ArrowDown from "./svg/arrowDown";

type Item = {
  id?: ?string,
  label: string,
  value: ?string,
};

type Props = {
  items: Array<Item>,
  onSelect: (item: Item) => void,
  triggerButton?: (
    items: Array<Item>,
    onPress: Function,
    selectedItem: ?Item
  ) => React.Element<*>,
  selectButton?: (item: Item, onSelect: Function) => ?React.Element<*>,
  closeButton?: (onClose: Function) => ?React.Element<*>,
  source: {
    url: string,
  },
};

type State = {
  selectedItem: ?Item,
  isOverlayOn: boolean,
};

/**
 *
 */
class ValPicker extends React.PureComponent<Props, State> {
  static defaultProps = {
    triggerButton: null,
    selectButton: null,
    closeButton: null,
  };

  /**
   *
   * @param {*} props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      isOverlayOn: false,
    };
  }

  /**
   *
   */
  triggerButton = (items: Array<Item>, onPress: Function) => {
    const { triggerButton } = this.props;
    const { selectedItem } = this.state;
    return triggerButton ? (
      triggerButton(items, onPress, selectedItem)
    ) : (
      <Button onPress={this.onPress}>
        <TriggerContainer>
          <TriggerLeft>
            <Text>{selectedItem ? selectedItem.label : items[0].label}</Text>
          </TriggerLeft>
          <TriggerRight>
            <ArrowDown />
          </TriggerRight>
        </TriggerContainer>
      </Button>
    );
  };

  /**
   *
   */
  selectButton = (item: Item) => (
    <Button onPress={() => this.onSelect(item)} key={item.id}>
      <Text>{item.label}</Text>
    </Button>
  );

  /**
   *
   */
  closeButton = () => (
    <CloseTrigger>
      <Button onPress={this.onClose}>
        <CloseMe />
      </Button>
    </CloseTrigger>
  );

  onPress = () => {
    this.setState({
      isOverlayOn: true,
    });
  };

  onSelect = (item: Item) => {
    const { onSelect } = this.props;
    this.setState({
      isOverlayOn: false,
      selectedItem: item,
    });
    onSelect(item);
  };

  onClose = () => {
    this.setState({
      isOverlayOn: false,
    });
  };

  /**
   *
   */
  render() {
    const { items, source, closeButton, selectButton } = this.props;
    const { isOverlayOn } = this.state;
    return items && !!items.length ? (
      <React.Fragment>
        {!isOverlayOn ? this.triggerButton(items, this.onPress) : null}
        {isOverlayOn &&
          source && (
            <React.Fragment>
              <Image
                blurRadius={4}
                resizeMode="cover"
                source={source}
                style={{
                  position: "absolute",
                  zIndex: 999,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              />
              <BlurredContainer style={StyleSheet.absoluteFill}>
                <Scroller>
                  {items &&
                    !!items.length &&
                    items.map(
                      item =>
                        selectButton
                          ? selectButton(item, this.onSelect)
                          : this.selectButton(item)
                    )}
                  <View
                    key="bottomSpace"
                    style={{ height: 10, paddingTop: 50 }}
                  />
                </Scroller>
                <Close>
                  {closeButton ? closeButton(this.onClose) : this.closeButton()}
                </Close>
              </BlurredContainer>
            </React.Fragment>
          )}
      </React.Fragment>
    ) : null;
  }
}

export default ValPicker;
