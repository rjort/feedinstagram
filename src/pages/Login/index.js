import React from 'react';
import { StyleSheet, Text} from 'react-native';

import {Container, 
        Logo, 
        SubContainer, 
        DadosInput, 
        BtnAcesso, 
        BtnForgotten, 
        Cadastrar, 
        ContainerInferior} from './styles';

import logo from './assets/instagram.png';

export default function Login() {

    return (
    <Container>  
          <Logo source={logo} />
          <SubContainer>
        
              <DadosInput placeholder="Email"/>

              <DadosInput placeholder="Senha"/>  
              
              <BtnAcesso><Text>Acessar</Text></BtnAcesso>
            
              <BtnForgotten><Text>Esqueceu a senha?</Text></BtnForgotten>
            
          </SubContainer>
    
          <ContainerInferior>
            <Text >Não tem uma conta?</Text> 
            <Cadastrar><Text style={{color: '#1E90FF'}}>Cadastre-se</Text></Cadastrar>
          </ContainerInferior>
  
    </Container>
  );
}

const styles = StyleSheet.create(
  {text: {
    fontSize: 30,
    lineHeight: 33,
    color: "#333333",
    padding: 16,
    paddingTop: 16,
    minHeight: 170,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)"
},
})
