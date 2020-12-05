import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: 500;
`;

export const Description = styled.Text`
  padding: 10px;
  line-height: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

export const SubContainer = styled.View`
    
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    paddingHorizontal: 10;
    
`; 

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

