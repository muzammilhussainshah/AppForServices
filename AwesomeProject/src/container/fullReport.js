import React, { Component } from 'react';
import {
    Container, Button, Text, Content, Form, Items, Item, Input, Label, Alert, ListItem, CheckBox, Thumbnail, View, Picker,
    Left, Right, Spinner, Header, Body, Title, DatePicker
} from 'native-base';
import { ScrollView, Image, TouchableOpacity, } from 'react-native';
import * as firebase from 'firebase'
import strInReqLan from "../store/config/config";
import ErrorMessage from '../component/errorMessage';
import LogoImage from '../component/logoImage';
import { createJobData, errorForPostJob, createReportData, loaderStart } from '../store/action/action';
// import { errorForPostJob } from '../store/action/action';
import { errorRemove } from '../store/action/action';
import { connect } from 'react-redux';
import Loading from '../component/loader';
import {
    StyleSheet,
} from 'react-native';
import Textarea from 'react-native-textarea';
import PrSelectionJobs from '../component/renderAllPrForJobs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



// import * as firebase from 'firebase'
// import FirebaseClient from './FirebaseClient'
import RNFetchBlob from 'rn-fetch-blob'

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob







class FullReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUserName: "",



        }

    }










    render() {
        let viewReport = this.props.navigation.getParam('viewReport');
        viewReport = JSON.parse(viewReport);


        console.log(viewReport, "*viewReportviewReport")





        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1
                    // ,backgroundColor:"yellow" 

                }}>
                    <Header androidStatusBarColor="#AE000B"
                        style={{ backgroundColor: '#E61825', }}>
                        <Left>
                            <TouchableOpacity transparent
                                onPress={() => this.props.navigation.goBack()}

                            >

                                <MaterialIcons name='arrow-back' style={{ marginRight: 20, fontSize: 35, color: "white" }} />

                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title style={{ marginLeft: "8%", fontWeight: "bold" }}>{strInReqLan.viewReport}</Title>
                        </Body>

                    </Header>

                </View>




                <View style={{ flex: 9, backgroundColor: "white" }}>
                    <ScrollView contentContainerStyle={{ backgroundColor: "white" }}
                        style={{ marginTop: "5%" }}
                    >
                        {
                            Object.keys(viewReport.prForReport).map((reportProps, index) => {
                                console.log(reportProps, "reportProps", typeof viewReport.prForReport[reportProps])
                                if (viewReport.prForReport[reportProps] !== "") {
                                    return (
                                        (
                                            typeof viewReport.prForReport[reportProps] !== "object"
                                        )
                                            ?
                                            (
                                                <View style={{ borderBottomWidth: 0.4, borderBottomColor: "gray", width: "90%", marginLeft: "5%", padding: 10 }}>
                                                    <Text style={{ marginBottom: "1%" }}>{reportProps}: </Text>
                                                    <Text style={{ color: "gray", fontSize: 13 }} >{viewReport.prForReport[reportProps]}</Text>
                                                </View>
                                            )
                                            :
                                            (
                                                (viewReport.prForReport[reportProps].length === 0) ?
                                                    (null) :
                                                    (
                                                        <View style={{ borderBottomWidth: 0.4, borderBottomColor: "gray", width: "90%", marginLeft: "5%", padding: 10 }}>
                                                            <Text style={{ marginBottom: "1%" }}>{reportProps}: </Text>
                                                            {
                                                                viewReport.prForReport[reportProps].map((option, index) => {
                                                                    console.log(option.value, "screwdriver")
                                                                    return (

                                                                        <Text style={{ color: "gray", fontSize: 13 }} key={index}>{option.value}</Text>

                                                                    )
                                                                })
                                                            }
                                                        </View>
                                                    )

                                            )

                                    )

                                }

                            })


                        }




                    </ScrollView>


                </View>
            </View>


        );
    }
}


function mapStateToProp(state) {
    return ({
        isLoader: state.root.isLoader,
        isError: state.root.isError,
        errorMessage: state.root.errorMessage,
        allJobkeys: state.root.allJobkeys,
        allJobListArr: state.root.allJobListArr,
        allReportsArr: state.root.allReportsArr,
        objAllPreRegistration: state.root.objAllPreRegistration
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        createJobData: (userDetails, type, navigation) => {
            dispatch(createJobData(userDetails, type, navigation));
        },
        createReportData: (report, strInReqLancreateNewJobs, navigation, allJobListArr, allReportsArr) => {
            dispatch(createReportData(report, strInReqLancreateNewJobs, navigation, allJobListArr, allReportsArr));
        },
        errorForPostJob: () => {
            dispatch(errorForPostJob());
        },
        errorRemove: () => {
            dispatch(errorRemove());
        },
        loaderStart: () => {
            dispatch(loaderStart());
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(FullReport);


const styles = StyleSheet.create({

    contentContainer: {
        paddingBottom: 35,
        backgroundColor: "white",
        alignItems: "center"

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
        // marginTop: 22

    }


});

const styl = StyleSheet.create({
    // header: { backgroundColor: "#2196f3", flexDirection: 'row', borderBottomColor: '#cbcacf', borderBottomWidth: 0.5, shadowRadius: 1.2, shadowOpacity: 0.2, height: 50, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
    input: { justifyContent: 'center', alignItems: 'center', width: '100%' },
    // input1: {height: "9.5%", width: "100%", borderRadius: 30, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: 'white', shadowColor: '#e6ebf3', shadowOffset: {width: 5, height: 6 }, shadowOpacity: 1.0, width: '80%', margin: 5, elevation: 15 },
    // icons: {color: '#2196f3', marginRight: 10 },
    // form: {backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 2, height: 4 }, shadowOpacity: 2, width: '80%', margin: 10, elevation: 7, borderRadius: 100, borderWidth: 1, borderColor: '#d6d7da' },
    button: { backgroundColor: '#EC4651', marginTop: '5%', borderColor: '#EC4651', borderWidth: 1, shadowColor: '#d7f0ff', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, elevation: 9, marginBottom: 30 },
    error: { color: 'red', marginLeft: 30, marginRight: 30, width: '80%', fontWeight: "600" }
})