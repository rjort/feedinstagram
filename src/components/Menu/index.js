import React, { useState } from 'react';
import { 
    Container,
    SubContainer,
    ActionButton,
 } from './styles';

 import Icon from 'react-native-vector-icons/FontAwesome5';

const Menu = () => {
    const [iconConfigure] = useState({
        color: '#888',
        size: 22,
        position: 'absolute'
    });
return(
    <Container>

        <SubContainer>
          <ActionButton>
              <Icon name="home" {...iconConfigure} />
            </ActionButton>
          <ActionButton>
              <Icon name="search" {...iconConfigure}/>
            </ActionButton>
          <ActionButton>
              <Icon name="plus-square" {...iconConfigure}/>
            </ActionButton>
          <ActionButton>
              <Icon name="heart" {...iconConfigure}/>
            </ActionButton>
          <ActionButton>
              <Icon name="user" {...iconConfigure}/>
            </ActionButton>
        </SubContainer>
        
    </Container>



    );
};


export default Menu;