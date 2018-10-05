// @flow

import React, { PureComponent, Fragment } from 'react';
import { BlurView } from 'react-native-blur';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
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
} from './style';
import CloseMe from './closeMe';
import ArrowDown from './arrowDown';

type Item = {
  label: string,
  value: ?string,
};

type Props = {
  items: Array<Item>,
  onSelect: (item: Item) => void,
  triggerButton?: ?React.Element,
  selectButton?: ?React.Element,
  closeButton?: ?React.Element,
  source: {
    url: string,
  },
};

type State = {
  selectedItem: Item,
  isOverlayOn: boolean,
};

export default class ValPicker extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      isOverlayOn: false,
    };
  }

  triggerButton = (items, onPress) =>
    this.props.triggerButton ? (
      this.props.triggerButton(items, onPress, this.state.selectedItem)
    ) : (
      <Button onPress={this.onPress}>
        <TriggerContainer>
          <TriggerLeft>
            <Text>
              {this.state.selectedItem ? this.state.selectedItem : this.props.items[0].label}
            </Text>
          </TriggerLeft>
          <TriggerRight>
            <ArrowDown />
          </TriggerRight>
        </TriggerContainer>
      </Button>
    );

  selectButton = item => (
    <Button onPress={() => this.onSelect(item)} key={item.id}>
      <Text>{item.label}</Text>
    </Button>
  );

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

  onSelect = item => {
    this.setState({
      isOverlayOn: false,
      selectedItem: item.label,
    });
    this.props.onSelect(item);
  };

  onClose = () => {
    this.setState({
      isOverlayOn: false,
    });
  };

  render() {
    const { items, source } = this.props;
    return items && !!items.length ? (
      <Fragment>
        {!this.state.isOverlayOn ? this.triggerButton(items, this.onPress) : null}
        {this.state.isOverlayOn &&
          source && (
            <Fragment>
              <Image
                blurRadius={4}
                resizeMode="cover"
                source={source}
                style={{
                  position: 'absolute',
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
                        this.props.selectButton
                          ? this.props.selectButton(item, this.onSelect)
                          : this.selectButton(item),
                    )}
                  <View key="bottomSpace" style={{ height: 10, paddingTop: 50 }} />
                </Scroller>
                <Close>
                  {this.props.closeButton
                    ? this.props.closeButton(this.onClose)
                    : this.closeButton()}
                </Close>
              </BlurredContainer>
            </Fragment>
          )}
      </Fragment>
    ) : null;
  }
}
