import React from 'react';


import {
    Container,
    ContainerHeader,
    ContainerScrollStory,
    ContainerItemStory,
    ContainerPhoto,
    GroupLabel,
    Label, 
    Photo,
    Name
} from './styles';

//expo add react-native-vector-icons
//react-native link react-native-vector-icons

import Icon from 'react-native-vector-icons/FontAwesome5';

import avatar from '../../assets/foto.jpg';


const Stories = () =>{
    return(
        <Container>
            <ContainerHeader>
                <Label>Stories</Label>
                <GroupLabel>
                    <Icon name="caret-right" size={20} />
                <Label>Ver Tudo</Label>
                </GroupLabel>
            </ContainerHeader>

            <ContainerScrollStory>
               
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
                
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
            
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
 
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
 
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={avatar}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

            </ContainerScrollStory>
        </Container>
    );
};

export default Stories;