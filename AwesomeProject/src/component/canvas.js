import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Items, Item, View, Picker,Icon } from 'native-base';
import strInReqLan from "../store/config/config";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class PrSelectionJobs extends Component {

   


    render() {
        


        return (
            <Item style={styles.input} >


             











                <Picker 
                iosIcon={<Icon name="ios" />}
 
                
                mode="dropdown" style={{  marginRight: 5 }}  selectedValue={"Sadasd"} >
                    <Items style={{ fontSize: 12 }} label={strInReqLan.selectpreregistration} value={""} />

                 

                </Picker>
            </Item>

        );
    }
}


const styles = StyleSheet.create({

    contentContainer: {
        paddingBottom: 100,
        backgroundColor: "white",
        // flex: 1
        // containerForCanvas
    },
    containerForCanvas: {
        height: 220, marginTop: 12
    },

    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 25, width: 50,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
    ,


    containerTextarea: {
        // width: "100%",
        // flex: 1,
        padding: 12,
        borderRadius: 0,
        height: 250,
        backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: 'white', shadowColor: '#e6ebf3', shadowOffset: { width: 5, height: 6 }, shadowOpacity: 1.0, width: '100%', margin: 10, elevation: 15
    },

    marginText: {
        color: '#004D94',
        textAlign: 'center',
        // marginTop: 0
        marginBottom: 7,
        marginTop: 7

    },
    btnTextMargin: {
        fontWeight: 'bold',
        marginTop: 22

    }


});
