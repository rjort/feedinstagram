import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 20px;
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

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
 
`;
export const ContainerActions = styled.View`
  padding: 10px 5px;
  
`;

export const ContainerActionsIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const GroupIcons = styled.View`
  flex-direction: row;  
`;

export const AddComent = styled.TextInput`
  borderColor: #DCDCDC;
  borderWidth: 1px;
  backgroundColor: #FFF;
  width: 350px;
  color: #222;
  borderRadius: 25px;
  padding: 10px;
  align-items: center;

`;

export const Label = styled.Text`
  padding: 5px 5px;
  padding-top: 0px;
  font-size: 15px; 
`;

export const ViewComentario = styled.View`
  height: 60px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  paddingHorizontal: 10;
`;

export const BtnVerComentario = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

`;