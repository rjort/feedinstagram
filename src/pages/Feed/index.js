import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList, Image}  from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import Header from '../../components/Header';
import Stories from '../../components/Stories';
import { AsyncStorage } from 'react-native';


import { 
  Container, 
  Post, 
  HeaderProfile, 
  ItensHeader,
  Avatar, 
  Name, 
  ContainerActions,
  ContainerActionsIcons,
  GroupIcons,
  Loading, 
  ActionButton, 
  AddComent, 
  Label, 
  BtnVerComentario,
  ViewComentario,
 } from './styles';

 
//expo add react-native-vector-icons
//react-native link react-native-vector-icons

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Feed() {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([])

  const MAX_LENGTH = 250;

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);
    //http://localhost:3000/feed?_expand=author&_limit=4&_page=1
    //utilizar server.js no jsonserver
    //https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=1&limit=4
    //utilizar o server2.js no www.mockapi.io
    axios
    .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`)
    .then(response => {
      const totalItems = response.headers["x-total-count"]
      const data = response.data
      //console.log(data)
      setLoading(false)
      setTotal(Math.floor(totalItems / 4));
      setPage(pageNumber + 1);
      setFeed(shouldRefresh ? data : [...feed, ...data]);
    })
    .catch(err => {
      setError(err.message);
      setLoading(true)
    })
  }

  async function refreshList() {
    setRefreshing(true);
    
    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      } 
    } catch (error) {
      // Error saving data
    }
  }

  const onSave = async (id) => {
    try {
      await AsyncStorage.setItem(id, text);
      setComentarios([...comentarios, ...text])
    } catch (error) {
      // Error saving data
    }
  }

  useEffect(() => {
    loadPage()
  }, []);

  const [iconConfigure] = useState({
    color: '#9C9C9C',
    size: 20,
    position: 'absolute'
});
  
  const [iconGroup] = useState({
  color: '#363636',
  size: 20,
  position: 'absolute'
  
});

  const [liked, setLiked] = useState(false);

  const renderItem = ({item}) => {

    return (
     
      <Post>
        <HeaderProfile>
          <ItensHeader>
          <Avatar source={{ uri: item.author.avatar }} />
          <Name>{item.author.name} </Name>
          
          </ItensHeader>
          <ActionButton><Icon  name="ellipsis-h" {...iconConfigure} /></ActionButton>
         
        </HeaderProfile>

        <LazyImage
              aspectRatio={item.aspectRatio} 
              shouldLoad={viewable.includes(item.id)} 
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
        />
        <ContainerActions>
          <ContainerActionsIcons>
            <GroupIcons>
            <ActionButton
                onPress={()=> {
                setLiked(!liked)
                }}>
                  <Image source={liked
                  ?require("../../assets/Feed/heart.png")
                  :require("../../assets/Feed/heart-outline.png")
              }
                  style={{height: 20, width: 20}}
                  resizeMode="cover"
              />
              </ActionButton>
                 
              <ActionButton>
                <Icon name="comment" {...iconGroup} />
              </ActionButton>

              <ActionButton>
                <Icon name="paper-plane" {...iconGroup} />
              </ActionButton>

            </GroupIcons>

              <ActionButton>
                <Icon  name="bookmark" {...iconGroup} />
              </ActionButton>

          </ContainerActionsIcons>
              <Label>320 Likes</Label>

              <Label><Name>{item.author.name}</Name> {item.description}</Label>

              <BtnVerComentario><Label style={{color: '#B5B5B5'}}>Ver todos os comentarios</Label></BtnVerComentario> 
              
              <Label>{comentarios} </Label>

        </ContainerActions>

        <ViewComentario>
        
                <AddComent 
                  multiline={true}
                  onChangeText={(text) => setText(text)}
                  placeholder={"Adicione um comentário..."}
                  style={[styles.text]}
                  maxLength={MAX_LENGTH}
                  showsVerticalScrollIndicator={false}
                  value={text} />

                <ActionButton 
                  onPress={() => onSave(String(item.id))}>
                  <Icon style={{paddingHorizontal: 10}} name="paper-plane" {...iconGroup}
                  accessibilityLabel="Salvar"/>
                </ActionButton>
        </ViewComentario>

      </Post>
    )
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    
    <Container>
      <Header />
      <Stories />
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={loading && <Loading />}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
};

const styles = StyleSheet.create(
  {text: {
    fontSize: 15,
    lineHeight: 15,
    color: "#333333",
    padding: 16,
    borderTopWidth: 1,
    
    borderColor: "rgba(212,211,211, 0.3)"
}
});

