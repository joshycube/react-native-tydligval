// @flow

/* istanbul ignore next */
import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`;

export const BlurredContainer = styled.View`
  position: absolute;
  flex: 1;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding-top: 55;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding-top: 25;
  padding-bottom: 25;
  align-self: center;
  height: 450;
`;

export const Close = styled.View`
  padding-top: 55;
  align-self: center;
`;

export const TriggerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TriggerLeft = styled.View`
  align-self: center;
`;

export const TriggerRight = styled.View`
  align-self: center;
  padding-top: 5;
  padding-left: 5;
`;

export const CloseTrigger = styled.View`
  padding-bottom: 100;
`;
