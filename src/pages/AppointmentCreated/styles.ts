import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  color: #a18de7;
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #000;
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  padding: 12px 24px;
  background: #a18de7;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
`;

export const OkButtonText = styled.Text`
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
