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

import { loadHollywood, addFavorite, addSave, addWatch, RemoveFromFavouriteAction } from '../../actions';
import BollywoodC from './Bollywood2';

class Hollywood extends React.Component {
    loadHollywood = () => {
        this.props.dispatchLoadProducts(this.state);
    }
    addWatch = (hMovie) => {
        this.props.dispatchWatch(hMovie);
    }
    addFavorite = (hMovie) => {
        this.props.dispatchFavorites(hMovie);
    }
    // addFavorite = () => {
    //     this.props.dispatchFavorites(favorites);
    // }
    addSave = (hMovie) => {
        this.props.dispatchSave(hMovie);
    }
    RemoveFromFavouriteAction = (_id) => {
        this.props.dispatchRemove(_id);
    }
    details = (hMovie) => {
        //console.log(id);
        this.props.navigation.navigate('FilmDetails', { Movies: hMovie });
    }
    render() {
        const { hMovies } = this.props;
        // const { favorites } = this.props;
        // console.log(favorites);
        return (
            <View style={styles.container}>
                {
                    <View>
                        <BollywoodC />
                    </View>
                }

                <ScrollView style={styles.BooksContainer}>
                    {hMovies.map((hMovie, index) => (
                        < View style={styles.book} key={index} >
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100, }}
                                    source={{
                                        uri: hMovie.imageUrl,
                                    }}
                                >
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{hMovie.name}</Text>
                                <Text style={styles.details}>GENRE = {hMovie.genre}</Text>
                                <Text style={styles.details}>RATING = {hMovie.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {hMovie.director}</Text>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity onPress={() => { this.addSave(hMovie) }}><Image source={require('../assets/diskette.png')} style={styles.imageStyle} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.addWatch(hMovie) }} style={{ marginLeft: 20 }} ><Image source={require('../assets/send.png')} style={styles.imageStyle} /></TouchableOpacity>
                                    {/* <TouchableOpacity onPress={() => {
                                        state.favorites.find((m) => m.id == hMovie._id)
                                            ? this.RemoveFromFavouriteAction(hMovie._id)
                                            : this.addFavorite(hMovie)
                                    }} style={{ marginLeft: 20 }}><Image source={require('../assets/heart.png')} style={styles.imageBackStyle} />
                                    </TouchableOpacity> */}
                                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => { this.addFavorite(hMovie) }}><Image source={require('../assets/heart.png')} style={styles.imageStyle} /></TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.details(hMovie) }}>
                                    <Image source={require('../assets/direction-arrow.png')} style={styles.imageStyle} />
                                </TouchableOpacity>
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

    book: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 2,
        backgroundColor: 'grey',
        borderRadius: 40
    },
    name: {
        fontSize: 20,
        color: 'White',
        marginRight: 10,
        fontStyle: 'bold'
    },
    details: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic'
    },
});
const mapDispatchToProps = {
    dispatchLoadProducts: (hMovie) => loadHollywood(hMovie),
    dispatchFavorites: (hMovie) => addFavorite(hMovie),
    dispatchSave: (hMovie) => addSave(hMovie),
    dispatchWatch: (hMovie) => addWatch(hMovie),
    dispatchRemove: (_id) => RemoveFromFavouriteAction(_id),
    // dispatchFavorites: (favorites) => addFavorite(favorites),
}
const mapStateToProps = (state) => ({
    hMovies: state.BollywoodReducer.hMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);


