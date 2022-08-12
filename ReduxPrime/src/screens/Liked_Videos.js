

import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput, Image, ImageBackground
} from 'react-native';

import { addFavorite, RemoveFromFavouriteAction } from '../../actions';


class Liked_Videos extends React.Component {
    addFavorite = () => {
        this.props.dispatchFavorites(this.state);
    }
    RemoveFromFavouriteAction = (movie) => {
        this.props.dispatchRemove(movie);
        console.log("in remove");
    }
    render() {
        const { favorites } = this.props;
        console.log(favorites);
        return (
            <View style={styles.container}>

                <ScrollView style={styles.BooksContainer}>
                    {favorites.map((favorites, index) => (
                        < View style={styles.book} key={index} >
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100 }}
                                    source={{
                                        uri: favorites.imageUrl,
                                    }}
                                >
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{favorites.name}</Text>
                                <Text style={styles.details}>GENRE = {favorites.genre}</Text>
                                <Text style={styles.details}>RATING = {favorites.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {favorites.director}</Text>
                                <TouchableOpacity onPress={() => { this.RemoveFromFavouriteAction(favorites) }} style={
                                    styles.removeButton
                                }><Text style={{ fontSize: 20 }}>Remove</Text></TouchableOpacity>
                            </View>

                        </View>
                    ))
                    }

                </ScrollView >

            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },

    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1,
        backgroundColor: 'black'
    },
    imageStyle: {
        width: 25,
        height: 25,
    },
    imageBackStyle: {
        height: 25,
        width: 25,
        alignSelf: 'flex-end',
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    removeButton: {
        marginLeft: 40,
        marginTop: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 20
    },

    book: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 2,
        backgroundColor: 'grey',
        borderRadius: 40

    },
    name: {
        fontSize: 20,
        color: 'white',
        marginRight: 10
    },
    details: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic'
    },
});
const mapDispatchToProps = {
    dispatchFavorites: (favorites) => addFavorite(favorites),
    dispatchRemove: (movie) => RemoveFromFavouriteAction(movie),

}

const mapStateToProps = (state) => ({
    favorites: state.BollywoodReducer.favorites
})

export default connect(mapStateToProps, mapDispatchToProps)(Liked_Videos);




