import React , { Component } from 'react';
import { View, Text, ScrollView, FlatList, Image, StyleSheet } from 'react-native';
import { Router, Stack, Scene, Tabs, Drawer } from 'react-native-router-flux';
import movieListAi from '../../env';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './drawerContent';

const DrawerIcon = () => (<Icon name="bars" size={20} />);
const SearchIcon = () => (<Icon name="search" size={20} />);

const styles = StyleSheet.create({
    poster : {
        width: '100%',
        height: 200,
        margin: 7,
    },
    posterTitle : {
        width: '100%',
        textAlignVertical : 'center',
        padding: 10,
    }
})

export default class Home extends Component {
    state = {
        movieList : [],
        imageUrl: 'http://image.tmdb.org/t/p/w200/'
    }
    fetchMovieList = async () => {
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ movieListAi }`).then(rs=>{
            this.setState({ movieList : rs.data.results });
        })
    }
    componentDidMount() {
        this.fetchMovieList();
    }
    render() {
        return (
            <View style={{ flex : 1 }}>
                <ScrollView style={{ padding : 10 , flex: 1}}>
                    <FlatList 
                        data={this.state.movieList}
                        contentContainerStyle={{ flexDirection: 'column' }}
                        numColumns={3}
                        renderItem= {
                            (  movie  ) => 
                                <View style={{ width : 180 , borderRadius : 7 }}>
                                    <Image source={{ uri: this.state.imageUrl + movie.item.poster_path }} style={ styles.poster }></Image>
                                    <Text style={styles.posterTitle}>{ movie.item.title }</Text>
                                </View>
                            
                        }
                        keyExtractor={ (movie , i) => i.toString() }
                    ></FlatList>
                </ScrollView>
            </View>
        )
    }
}