import React, { Component } from 'react';
// import { Container, Button, Text, Content, Form, Item, Input, Label, Alert, Thumbnail, View } from 'native-base';
import {
    Container, Button, Text, Content, Form, Items, Item, Input, Label, Alert, ListItem, CheckBox, Thumbnail, View, Picker,
    Left, Right, Spinner, Header, Body, Title, DatePicker
} from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import LogoImage from '../component/logoImage';
import Loading from '../component/loader';
import ErrorMessage from '../component/errorMessage';
import { getJobsListInUser, setIndex, logOut, report, setIndexForUser, deleteReport, loaderStart, prClone } from '../store/action/action';

import { errorRemove } from '../store/action/action';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';



import { connect } from 'react-redux';


import strInReqLan from "../store/config/config";

import {
    StyleSheet,

} from 'react-native';

class Notification extends Component {
    constructor() {
        super()
        this.state = {

            // company //
            // email: 'ahmedCompany@gmail.com',


            // user //
            // email: 'ahmed@gmail.com',
            flagForEmptyNotification: true,
            // email: '',
        }
    }




    viewPost(index) {
        console.log(index, "innnnndex", )
        this.props.loaderStart();


        let jobKeys = this.props.allJobkeys[index]
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        var prClone;
        if (isEmpty(this.props.objAllPreRegistration) === false) {
            prClone = this.props.objAllPreRegistration[jobKeys]

            setTimeout(() => {
                this.props.setIndexForUser(index, this.props.navigation, this.props.allJobListArr[index], prClone)
            }, 50)



            console.log("if")
        }


        else {
            console.log("else")
            setTimeout(() => {
                this.props.setIndexForUser(index, this.props.navigation, this.props.allJobListArr[index])

            }, 50)

        }




    }



    render() {
        console.log(this.props.allJobListArr, "objAllPreRegistrationobjAllPreRegistration",this.props.that)
        let that = this.props.that
        return (

            (this.state.flagForEmptyNotification === false) ?

                (
                    <View style={{ position: "absolute", zIndex: 1, width: "100%", height: "100%", marginVertical: "15%" }}>

                        <View style={{
                            backgroundColor: '#ebf2ff', padding: "2%", flex: 0.5, width: "81%",
                            borderWidth: 1,
                            borderRadius: 2,
                            borderColor: '#ddd',
                            borderBottomWidth: 0,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 1,
                            marginLeft: 5,
                            marginRight: 5,
                            marginVertical: "-2%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>

                            <Icon name="bell-slash" style={{ fontSize: 100, color: "#c9cbcc", }} />
                            <Text style={{ color: "grey" }}>There are no notifications </Text>
                        </View>


                    </View>
                ) :


                (











                    <View style={{ position: "absolute", zIndex: 1, width: "100%", height: "100%", marginVertical: "15%" }}>


                        {this.props.allJobListArr.map((allJobListArr, index) => {
                            console.log(allJobListArr, "individual", this.state.allJobListArr)
                            return (
                                <TouchableOpacity
                                    onPress={this.props.onChangeFunc.bind(that, index)}
                                    // this.props.onChangeFunc.bind(that)
                                    activeOpacity={0.9}
                                    style={{
                                        backgroundColor: '#ebf2ff', padding: "2%", flexDirection: 'row', flex: 0.15, width: "81%",
                                        borderWidth: 1,
                                        borderRadius: 2,
                                        borderColor: '#ddd',
                                        borderBottomWidth: 0,
                                        shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.8,
                                        shadowRadius: 2,
                                        elevation: 1,
                                        marginLeft: 5,
                                        marginRight: 5,
                                        marginVertical: "-2%",
                                    }} key={index}>

                                    <View
                                        style={{ backgroundColor: "#ebf2ff", flex: 1, alignItems: "center", justifyContent: "center" }}
                                    >
                                        {/* <View style={{ borderRadius: 100, backgroundColor: "#a7acb0", width: "60%", height: "62%", alignItems: "center", justifyContent: "center" }}> */}

                                        <Icon name="bell-slash" style={{ fontSize: 33, color: "#c9cbcc", opacity: 1 }} />
                                        {/* </View> */}

                                    </View>
                                    <View style={{ flex: 3, }}>
                                        <View style={{ flex: 1, backgroundColor: '#ebf2ff', paddingHorizontal: "2%" }}>
                                            <Text style={{ color: "#123d44", fontWeight: "bold", marginVertical: "5%" }}>{allJobListArr.jobTitle || allJobListArr.serTitle}</Text>
                                        </View>
                                        <View style={{ flex: 1, backgroundColor: '#ebf2ff', paddingHorizontal: "2%" }}>
                                            <Text style={{ color: "#123d44" }}>
                                                {Moment(allJobListArr.jobDate).format('ddd DD MMM YY')}
                                            </Text>

                                        </View>
                                    </View>




                                </TouchableOpacity>
                            )
                        }
                        )
                        }


                    </View>)
        );
    }
}



function mapStateToProp(state) {
    return ({
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        errorMessage: state.root.errorMessage,
        objAllPreRegistration: state.root.objAllPreRegistration,
        allJobListArr: state.root.allJobListArr,
        allJobkeys: state.root.allJobkeys
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        login: (userCredentials, navigation) => {
            dispatch(login(userCredentials, navigation));
        },
        errorRemove: () => {
            dispatch(errorRemove());
        },
        loaderStart: () => {
            dispatch(loaderStart());
        },
        setIndexForUser: (index, navigation, jobView, prClone) => {
            dispatch(setIndexForUser(index, navigation, jobView, prClone));
        },
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Notification);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imgSize: {
        width: "50%",
        height: 100,
    },
    imgView: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 200,


    },
    footerColor: {
        backgroundColor: "#cc3333"
    },
    marginText: {
        color: '#004D94',
        textAlign: 'center',
        marginTop: 15
    },
    forgetYourPassword: {
        color: '#004D94',
        textAlign: 'center',
        margin: 15
        // marginTop: 15,
        // flexWrap: 'wrap', 
        // alignItems: 'flex-start',
        // flexDirection:'row',
    },
    btnTextMargin: {
        fontWeight: 'bold',
        marginTop: 8


    }


});

const styl = StyleSheet.create({
    header: { backgroundColor: "#2196f3", flexDirection: 'row', borderBottomColor: '#cbcacf', borderBottomWidth: 1, shadowRadius: 1.2, shadowOpacity: 0.2, height: 50, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
    input: { backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: 'white', shadowColor: '#e6ebf3', shadowOffset: { width: 5, height: 6 }, shadowOpacity: 1.0, width: '80%', margin: 10, elevation: 15 },
    icons: { color: '#2196f3', marginRight: 10 },
    form: { backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, width: '80%', margin: 10, elevation: 7, borderRadius: 100, borderWidth: 1, borderColor: '#d6d7da' },
    button: { width: '80%', backgroundColor: '#EC4651', marginLeft: '10%', marginRight: '10%', marginTop: '5%', borderColor: '#EC4651', borderRadius: 100, borderWidth: 1, shadowColor: '#d7f0ff', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, elevation: 9, marginBottom: 30 },

    error: { color: 'red', marginLeft: 30, marginRight: 30, width: '80%', fontWeight: "600" }
})