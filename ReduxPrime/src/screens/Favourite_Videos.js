
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

import { addWatch, RemoveFromWatchAction } from '../../actions';
//import BollywoodC from './Bollywood2';

class Favourite_Videos extends React.Component {
    addWatch = () => {
        this.props.dispatchWatch(this.state);
    }
    RemoveFromWatchAction = (movie) => {
        this.props.dispatchRemove(movie);
    }
    render() {
        const { watch } = this.props;
        console.log(watch);
        return (
            <View style={styles.container}>

                <ScrollView style={styles.BooksContainer}>
                    {watch.map((watch, index) => (
                        < View style={styles.book} key={index} >
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100 }}
                                    source={{
                                        uri: watch.imageUrl,
                                    }}
                                >
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{watch.name}</Text>
                                <Text style={styles.details}>GENRE = {watch.genre}</Text>
                                <Text style={styles.details}>RATING = {watch.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {watch.director}</Text>
                                <TouchableOpacity onPress={() => { this.RemoveFromWatchAction(watch) }} style={styles.removeButton}><Text style={{ fontSize: 20 }}>Remove</Text></TouchableOpacity>
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
    removeButton: {
        marginLeft: 40,
        marginTop: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 20
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
    dispatchWatch: (watch) => addWatch(watch),
    dispatchRemove: (movie) => RemoveFromWatchAction(movie),
}

const mapStateToProps = (state) => ({
    watch: state.BollywoodReducer.watch
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite_Videos);




