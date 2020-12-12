import React, { useState }  from 'react';
import {Text} from 'react-native';



import { ActionButton} from './styles';
import {
    Container,
    ContainerHeader,
    ContainerProfile,
    ContainerPhoto,
    BorderPhoto,
    GroupLabel,
    ContainerInfo, 
    Photo,
    UserName,
    InfoProfile,
    SubContainerProfile,
    BtnPerfil,
    ContainerScrollStory,
    ContainerItemStory,
    SubContainerStory,
    PhotoStory,
    InfoStory,
    ContainerMenu,
    SubContainerMenu,
    
    
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';



import avatar from '../../assets/foto.jpg';

import Story1 from '../../assets/foto.jpg';
import Story2 from '../../assets/foto.jpg';
import Story3 from '../../assets/foto.jpg';
import Story4 from '../../assets/foto.jpg';


const Profile = () =>{
    const [iconConfigure] = useState({
        color: '#4F4F4F',
        size: 22,
        position: 'relative'
    });

    return(
    <Container>
        <ContainerHeader>
            <ActionButton>
            
            <UserName>username</UserName>
            </ActionButton>

            
            
            <GroupLabel>    
           <ActionButton>
                <Icon name="plus" {...iconConfigure} color={'#000'}/>
            </ActionButton>
            <ActionButton>
                <Icon name="bars" {...iconConfigure} color={'#000'} />
            </ActionButton>
           </GroupLabel>
        </ContainerHeader>
        
        <ContainerProfile>
            <ContainerPhoto>
                <BorderPhoto>
                    <Photo source={avatar}/>
                </BorderPhoto>
            </ContainerPhoto>
            

            <ContainerInfo>
                <GroupLabel>    
                
                <ActionButton>
                    <InfoProfile style={{fontSize: 20}}>117</InfoProfile>
                    <InfoProfile>Publicações</InfoProfile>
                </ActionButton>
            
                <ActionButton>
                    <InfoProfile style={{fontSize: 20}}>1.102</InfoProfile>
                    <InfoProfile>Seguidores</InfoProfile>
                </ActionButton>
            
                <ActionButton>
                    <InfoProfile style={{fontSize: 20}}>962</InfoProfile>
                    <InfoProfile>Seguindo</InfoProfile>
                </ActionButton>
           
                </GroupLabel>
            </ContainerInfo>
        </ContainerProfile>
       
        <SubContainerProfile>           
                <InfoProfile>Nome</InfoProfile>
                <InfoProfile>Bio do Usuario</InfoProfile>
                <InfoProfile>Salvador, Brazil</InfoProfile>
                
        </SubContainerProfile>
        <BtnPerfil><Text>Editar Perfil</Text></BtnPerfil>
            


        <ContainerScrollStory>
               <ContainerItemStory>
                  <SubContainerStory>
                  <ActionButton>
                       <PhotoStory source={avatar}/>
                       </ActionButton>
                   </SubContainerStory>
                    <InfoStory>Avatar</InfoStory>
               </ContainerItemStory>
               
               <ContainerItemStory>
                  <SubContainerStory>
                  <ActionButton>
                       <PhotoStory source={avatar}/>
                       </ActionButton>
                   </SubContainerStory>

                   <InfoStory>Avatar</InfoStory>
               </ContainerItemStory>
              
               <ContainerItemStory>
                  <SubContainerStory>
                  <ActionButton>
                       <PhotoStory source={avatar}/>
                       </ActionButton>
                   </SubContainerStory>
                  
                   <InfoStory>Avatar</InfoStory>
               </ContainerItemStory>

               <ContainerItemStory>
                  <SubContainerStory>
                      <ActionButton>
                       <PhotoStory source={avatar}/>
                       </ActionButton>
                   </SubContainerStory>
                  
                   <InfoStory>Avatar</InfoStory>
               </ContainerItemStory>
               
               <ContainerItemStory>
                    <SubContainerStory>
                    <ActionButton>
                        <Icon name="plus" size={25} />
                    </ActionButton>
                    </SubContainerStory>
                   <InfoStory>Avatar</InfoStory>
               </ContainerItemStory>
           </ContainerScrollStory>

        <ContainerMenu>
        
        <SubContainerMenu>
          <ActionButton>
              <Icon name="th" {...iconConfigure} size={18}/>
            </ActionButton>
          <ActionButton>
              <Icon name="bars" {...iconConfigure} size={18}/>
            </ActionButton>
          <ActionButton>
              <Icon name="bookmark" {...iconConfigure} size={18}/>
            </ActionButton>
        </SubContainerMenu>

        </ContainerMenu>
 
   </Container>

    );

    
};

export default Profile;