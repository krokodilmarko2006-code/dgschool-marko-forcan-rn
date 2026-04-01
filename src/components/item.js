import React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';

const Item = ({item}) => (
    <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
            <Image source={{uri: `${item.image}`}} resizeMode="cover" style={styles.img}/>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    cardContainer:{
        width: "100%",
        height: 130,
        flexDirection:"row",
        borderRadius:8,
        marginBottom:5,
    },
    img:{
        width:100,
        height: "90%",
        resizeMode: "cover",
        borderRadius: 9,
        marginTop: 5,
    },
    textContainer:{
        paddingHorizontal: 10,
        marginVertical:10,
        width:"70%"
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
    },
    category:{
        fontSize:12,
        backgroundColor
    },
    description:{
        fontSize:16,
        fontWeight:"bold",
    },
    price:{
        fontSize:16,
        fontWeight:"bold",
    },
});
export default Item;
