import React from 'react';
import { View, Text, ScrollView,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import data from '../data/products.json'
class Ios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products:[],};}
  componentDidMount(){
    this.setState({
        products: data,
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text></Text>
            <View>
                <FlatList data={this.state.products.ios}
                renderItem={({item})=><Item item={item}/>}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        paddingHorizontal:20,
    },
    button:{
        backgroundColor: "#384053",
        padding: 10,
        textAlign:"center",
    },
    buttonText:{
        color: "white",
        textAlign:"center",
        fontWeight: "bold",
    }
});

export default Ios;
