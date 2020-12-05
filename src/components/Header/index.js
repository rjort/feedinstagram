import React from 'react';

import {Container, Logo, ActionButton} from './styles';

//expo add react-native-vector-icons
//react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/logo.png';

const Header = () => {

    
    return(
        <Container>
             <ActionButton>
             <Icon name="camera" size={22} />
            </ActionButton>
            <Logo source={logo} />
           
            <ActionButton>
            <Icon name="paper-plane" size={22} />
            </ActionButton>
            
        </Container>
    );
};

export default Header;