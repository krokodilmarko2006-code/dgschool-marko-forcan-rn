import React from 'react';
import { Text, View,Image, StyleSheet, TouchableOpacity, } from 'react-native';

const Single = ({navigation,route:{params:{item},},}) => (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={{uri: `${item.image}`}} resizeMode='cover' style={styles.img}/>
        </View>
        <View style={styles.cardHeader}>
            <Text style={styles.textCard}>{item.name}</Text>
            <Text style={styles.textCard}>{item.price}</Text>
        </View>
        <Text style={styles.desc}>{item.description}</Text>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btn}>
            <Text style={styles.btnText}>Ala Ala</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:40,
    },
    imgContainer:{
        width:"90%",
        height:400,
        borderRadius:12,
    },
    img:{
        width:"100%",
        height:"100%",
        borderRadius:12,
    },
    cardHeader:{
        marginTop:40,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textCard:{
        fontSize:25,
        color:"#444",
        textTransform:"uppercase",
        fontWeight:"bold",
    },
    desc:{
        width:"90%",
        marginTop:40,
        textAlign:"center",
    },
    btn:{
        backgroundColor:"#ff444f",
        height:10,
        borderRadius:8,
        justifyContent:"center",
        marginTop:20,
        width:200,
    },
    btnText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
    },
});
export default Single;
