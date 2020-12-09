import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex:3;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFF;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex:1;
  justifyContent: flex-start;
  width: 200px;
  height:200px; 
  resizeMode: center;
`;

export const SubContainer = styled.View`
  flex:1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: #FFF;
`;

export const DadosInput = styled.TextInput`
  borderColor: #DCDCDC;
  borderWidth: 1px;
  backgroundColor: #FFF;
  width: 350px;
  marginBottom: 20px;
  color: #222;
  fontSize: 17px;
  borderRadius: 7px;
  padding: 10px;
`;

export const ContainerInferior = styled.View`
  marginTop: 15px;
  flex: 1;
  alignItems: center;
  justifyContent: center;
  width: 150px;
`;

export const BtnAcesso = styled.TouchableOpacity`
  padding: 11px;
  borderRadius: 7px;
  backgroundColor: #00BFFF;
  width: 350px;
  justifyContent: center;
  alignItems: center;
`;

export const BtnForgotten = styled.TouchableOpacity`
  flex:1;
  marginTop: 11px;
  alignItems: center;
  justifyContent: flex-start;
  width: 150px;
`;

export const Cadastrar  = styled.TouchableOpacity`
  color: #1E90FF;
`;