// import React from "react";
// import { View, Text, StyleSheet,ImageBackground } from 'react-native';

// class FilmDetails extends React.Component {

//     render() {
//         return (
//             < View style={styles.book} >
//                 <View>
//                     <ImageBackground
//                         style={{ height: 120, width: 100, }}
//                         source={{
//                             uri: this.props.route.params.imageUrl,
//                         }}
//                     >
//                     </ImageBackground>
//                 </View>

//                 <View style={{ padding: 5 }}>
//                     <Text style={styles.name}>{this.props.route.params.name}</Text>
//                     <Text style={styles.details}>GENRE = {this.props.route.params.genre}</Text>
//                     <Text style={styles.details}>RATING = {this.props.route.params.imdbRating}</Text>
//                     <Text style={styles.details}>DIRECTOR= {this.props.route.params.director}</Text>
//                 </View>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     title: {
//         paddingTop: 30,
//         paddingBootom: 20,
//         fontSize: 20,
//         textAlign: 'center',
//     },

//     BooksContainer: {
//         borderWidth: 1,
//         borderTopColor: 'red',
//         flex: 1,
//         backgroundColor: 'black'
//     },
//     imageStyle: {
//         width: 25,
//         height: 25,
//     },
//     imageBackStyle: {
//         height: 25,
//         width: 25,
//         alignSelf: 'flex-end',
//     },
//     buttonView: {
//         flexDirection: 'row',
//         marginTop: 10,
//     },

//     book: {
//         padding: 20,
//         flexDirection: 'row',
//         borderBottomWidth: 2,
//         backgroundColor: 'grey',
//         borderRadius: 40
//     },
//     name: {
//         fontSize: 20,
//         color: 'White',
//         marginRight: 10,
//         fontStyle: 'bold'
//     },
//     details: {
//         fontSize: 14,
//         color: 'white',
//         fontStyle: 'italic'
//     },
// });

// export default(FilmDetails);

import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default function FilmDetails({ route }) {
    const { Movies } = route.params;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground
                resizeMode='cover'
                style={{
                    width: '100%',
                    height: 450
                }} source={{ uri: Movies.imageUrl }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, color: 'white' }}>
                        {Movies.name}
                    </Text>
                </View>
            </ImageBackground>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', }}>Description</Text>
                <Text style={{ fontSize: 20, color: 'black', borderBottomWidth: 2 }}>{Movies.overview}</Text>
                <Text style={{ fontSize: 20, color: 'black', borderBottomWidth: 2 }}>Released: {Movies.releaseYear}</Text>
                <Text style={{ fontSize: 20, color: 'black', borderBottomWidth: 2 }}>Runtime: {Movies.runtime}</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={{ marginLeft: 90 }} ><Image source={require('../assets/diskette.png')} style={styles.imageStyle} /></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 50 }} ><Image source={require('../assets/send.png')} style={styles.imageStyle} /></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 50 }} ><Image source={require('../assets/heart.png')} style={styles.imageStyle} /></TouchableOpacity>
            </View>
        </ScrollView>
    )
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