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

import story from '../../assets/Story/avril_lavigne.jpg';
import story1 from '../../assets/Story/avril_lavigne.jpg';
import story2 from '../../assets/Story/avril_lavigne.jpg';
import story3 from '../../assets/Story/avril_lavigne.jpg';
import story4 from '../../assets/Story/avril_lavigne.jpg';
import story5 from '../../assets/Story/avril_lavigne.jpg';


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
                        <Photo source={story1}/>
                    </ContainerPhoto>
                    <Name>Avril</Name>
                </ContainerItemStory>
                
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story2}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
            
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story3}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story4}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
 
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story5}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>
 
                <ContainerItemStory>
                    <ContainerPhoto>
                        <Photo source={story}/>
                    </ContainerPhoto>
                    <Name>Avatar</Name>
                </ContainerItemStory>

            </ContainerScrollStory>
        </Container>
    );
};

export default Stories;