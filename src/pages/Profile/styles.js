import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    position: relative;
    backgroundColor: #FFF
    
`;
export const ContainerHeader = styled.SafeAreaView`
    flex-direction:  row;
    justify-content: space-between;
    align-items: center;
`;
export const GroupLabel = styled.View`
    flex-direction: row;
    align-items: center;
    
    
`;

export const ContainerInfo = styled.SafeAreaView`
    
    flex-direction:  row;
    justify-content: center;
    align-items: center;
    paddingHorizontal: 10px;
    
`;
export const ContainerProfile= styled.SafeAreaView`
    align-items: center;
    flex-direction:  row;
    justify-content: center;
    
    
`;
export const SubContainerProfile= styled.SafeAreaView`
    margin-top: 7px;
    paddingHorizontal: 5px;
    flex-direction:  column;
    align-items: stretch;
    justify-content: flex-start;
`;
export const BtnPerfil = styled.TouchableOpacity`
    margin-top: 7px;
    width: 380px;
    padding: 10px;
    borderRadius: 7px;
    borderColor: #DCDCDC;
    borderWidth: 0.5px;
    align-items: center;
    alignSelf: center;
`;

export const ContainerPhoto= styled.TouchableOpacity`
    padding: 10px;
    
`;

export const BorderPhoto  = styled.View`
    background-color: #4F4F4F;
    width: 94px;
    height: 94px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`;

export const Photo  = styled.Image.attrs({
    resizeMode: 'contain'
})`
    
    width: 90px;
    height: 90px;
    justify-content: center;
    border-radius: 100px;
`;
export const ActionButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const UserName  = styled.Text`
    
    padding: 5px 5px;
    padding-top: 0px;
    font-size: 30px; 
    fontWeight: bold;
`;

export const InfoProfile  = styled.Text`
    padding: 0.8px 5px;
    padding-top: 0px;
    font-size: 13px; 
    fontWeight: bold;
`;

export const ContainerScrollStory  = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    height: 100px;
    
    
`;

export const ContainerItemStory  = styled.View`
    width: 82px;
    height: 82px;
    justify-content: center;
    align-items: center;
    margin-top: 10px; 
    
`;
export const SubContainerStory  = styled.View`
    width: 59px;
    height: 59px;
    paddingHorizontal: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    borderColor: #DCDCDC;
    borderWidth: 1px;
   
`;

export const PhotoStory  = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 56px;
    height: 56px;
    justify-content: center;
    border-radius: 100px;
`;

export const InfoStory  = styled.Text`
    height: 20px;
    font-size: 12px;
    padding: 5px;
    
`;


export const ContainerMenu = styled.View`
    height:305px;
    borderTopWidth: 0.5px;
    borderColor: #DCDCDC;
       
    
`;

export const SubContainerMenu = styled.View`
    
    height: 38px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

`; 