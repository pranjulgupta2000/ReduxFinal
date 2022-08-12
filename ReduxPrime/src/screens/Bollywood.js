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

import { loadBollywood, addFavorite, addSave, addWatch } from '../../actions';
import BollywoodC from './Bollywood2';

class Bollywood extends React.Component {
    loadBollywood = () => {
        this.props.dispatchLoadProducts(this.state);
    }
    addWatch = (bMovie) => {
        this.props.dispatchWatch(bMovie);
    }
    addFavorite = (bMovie) => {
        this.props.dispatchFavorites(bMovie);
    }
    addSave = (bMovie) => {
        this.props.dispatchSave(bMovie);
    }
    details = (bMovie) => {
        //console.log(id);
        this.props.navigation.navigate('FilmDetails', { Movies: bMovie });
    }
    render() {
        const { bMovies } = this.props;
        const { favorites } = this.props;
        return (
            <View style={styles.container}>
                {
                    <View>
                        <BollywoodC />
                    </View>
                }

                <ScrollView style={styles.BooksContainer}>
                    {bMovies.map((bMovie, index) => (
                        < View style={styles.book} key={index} >
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100, }}
                                    source={{
                                        uri: bMovie.imageUrl,
                                    }}
                                >
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{bMovie.name}</Text>
                                <Text style={styles.details}>GENRE = {bMovie.genre}</Text>
                                <Text style={styles.details}>RATING = {bMovie.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {bMovie.director}</Text>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity onPress={() => { this.addSave(bMovie) }}><Image source={require('../assets/diskette.png')} style={styles.imageStyle} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.addWatch(bMovie) }} style={{ marginLeft: 20 }} ><Image source={require('../assets/send.png')} style={styles.imageStyle} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => { this.addFavorite(bMovie) }} style={{ marginLeft: 20 }}><Image source={require('../assets/heart.png')} style={styles.imageBackStyle} />
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity onPress={() => state.favorites.find((m) => m.name == bMovie.name)
                                        ? this.RemoveFromFavouriteAction(bMovie)
                                        : this.addFavouriteAction(bMovie)} style={{ marginLeft: 20 }}><Image source={require('../assets/heart.png')} style={styles.imageBackStyle} />
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { this.details(bMovie) }}>
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
    dispatchLoadProducts: (bMovie) => loadBollywood(bMovie),
    dispatchFavorites: (bMovie) => addFavorite(bMovie),
    dispatchSave: (bMovie) => addSave(bMovie),
    dispatchWatch: (bMovie) => addWatch(bMovie),
}


const mapStateToProps = (state) => ({
    bMovies: state.BollywoodReducer.bMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(Bollywood);


