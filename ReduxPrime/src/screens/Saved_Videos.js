// import React from "react";
// import { View, Text } from 'react-native';

// class Saved_Videos extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ color: 'black' }}>
//                     Saved_Videos
//                 </Text>
//             </View>
//         )
//     }
// }
// export default Saved_Videos;

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

import { addSave, RemoveFromSaveAction } from '../../actions';
//import BollywoodC from './Bollywood2';

class Saved_Videos extends React.Component {
    addSave = () => {
        this.props.dispatchSave(this.state);
    }
    RemoveFromSaveAction = (movie) => {
        this.props.dispatchRemove(movie);
        console.log("in remove");
    }
    render() {
        const { save } = this.props;
        console.log(save);
        return (
            <View style={styles.container}>

                <ScrollView style={styles.BooksContainer}>
                    {save.map((save, index) => (
                        < View style={styles.book} key={index} >
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100 }}
                                    source={{
                                        uri: save.imageUrl,
                                    }}
                                >
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{save.name}</Text>
                                <Text style={styles.details}>GENRE = {save.genre}</Text>
                                <Text style={styles.details}>RATING = {save.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {save.director}</Text>
                                <TouchableOpacity onPress={() => { this.RemoveFromSaveAction(save) }}
                                    style={styles.removeButton}><Text style={{ fontSize: 20 }}>Remove</Text></TouchableOpacity>
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
    removeButton: {
        marginLeft: 40,
        marginTop: 20,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 20
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
    dispatchSave: (save) => addSave(save),
    dispatchRemove: (movie) => RemoveFromSaveAction(movie),


}

const mapStateToProps = (state) => ({
    save: state.BollywoodReducer.save
})

export default connect(mapStateToProps, mapDispatchToProps)(Saved_Videos);




