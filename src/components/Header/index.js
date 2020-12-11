import React, { useState }  from 'react';

import {Container, Logo, ActionButton} from './styles';

//expo add react-native-vector-icons
//react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/logo.png';

const Header = () => {
    const [iconConfigure] = useState({
        color: '#4F4F4F',
        size: 22,
        position: 'absolute'
    });

    
    return(
        <Container>
             <ActionButton>
             <Icon name="camera" {...iconConfigure} />
            </ActionButton>
            <Logo source={logo} />
           
            <ActionButton>
            <Icon name="paper-plane" {...iconConfigure} />
            </ActionButton>
            
        </Container>
    );
};

export default Header;