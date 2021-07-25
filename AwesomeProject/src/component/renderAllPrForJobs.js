import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Items, Item, View, Picker } from 'native-base';
import strInReqLan from "../store/config/config";
import SelectMultiple from 'react-native-select-multiple'

export default class PrSelectionJobs extends Component {
    constructor() {
        super()
        this.state = {
            selectedPr: [],
            selectedFruits: []

        }
    }
    handle_change() {
        console.log(this.props.onChangeFunc, 'this.props.onChangeFuncthis.props.onChangeFunc');
        this.props.onChangeFunc();

    }








    render() {
        let that = this.props.that;
        const fruits = ['Apples', 'Oranges', 'Pears']


        let prData = this.props.prClone;
        console.log(prData, "4545555555555")
        let dropdownForPr = {}
        let checkboxForPr = {}
        let additionalForPr = []

        for (var key in prData) {
            console.log(key, "key")
            console.log(prData[key], "prData")

            if (key === "prAdditionalDataArr") {
                console.log(prData[key][0], "prAdditionalDatarr")
                for (var property in prData[key][0]) {
                    console.log(property, "property", prData[key][0][property])
                    if (prData[key][0][property] !== "" && property === "generalObservations") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.generalObservations)

                    }
                    else if (prData[key][0][property] !== "" && property === "requestedService") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.requestedService)

                    }
                    else if (prData[key][0][property] !== "" && property === "serviceYouHaveDone") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.serviceYouHaveDone)

                    }
                    else if (prData[key][0][property] !== "" && property === "codeOrOmFromTheCustomer") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.codeOrOmFromTheCustomer)

                    }
                    else if (prData[key][0][property] !== "" && property === "customersOsNumber") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.customersOsNumber)

                    }
                    else if (prData[key][0][property] !== "" && property === "discribeWhenMarkedAbove") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.discribeWhenMarkedAbove)

                    }
                    else if (prData[key][0][property] !== "" && property === "kmReport") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.kmReport)

                    }
                    else if (prData[key][0][property] !== "" && property === "overtimeReason") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.overtimeReason)

                    }
                    else if (prData[key][0][property] !== "" && property === "reportTheCID") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.reportTheCID)

                    }
                    else if (prData[key][0][property] !== "" && property === "reportTheDates") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.reportTheDates)

                    }
                    else if (prData[key][0][property] !== "" && property === "reportTheDatesCompensate") {
                        console.log("takli")
                        additionalForPr.push(strInReqLan.reportTheDatesCompensate)

                    }

                }




            }



            // {
            //         reportThat:[a,b,c,d]
            //         decipline:[1,2,3,4]
            // }




            if (key === strInReqLan.defectThatNeed || key === strInReqLan.whichSafetyEquipment || key === strInReqLan.whichToolIsNeeded
                || key === strInReqLan.whichEquipmentIsNeeded || key === strInReqLan.howMuchIsNeeded) {

                for (var i = 0; i < prData[key].length; i++) {

                    console.log(prData[key], "optionheads")
                    console.log(prData[key][i], "optionName")



                    if (prData[key][i].selected === true) {
                        console.log(key, "validoption")
                        // let arrayForEach = [];

                        // arrayForEach.push(key)
                        checkboxForPr[key] = []

                        for (var i = 0; i < prData[key].length; i++) {
                            checkboxForPr[key].push(prData[key][i].optionName)

                        }
                        // headingForPr.push(arrayForEach)

                    }


                }


            }



            for (var i = 0; i < prData[key].length; i++) {

                console.log(prData[key], "optionheads")
                console.log(prData[key][i], "optionName", prData[key])
                if (prData[key][i].selected === true && key !== strInReqLan.defectThatNeed && key !== strInReqLan.whichSafetyEquipment && key !== strInReqLan.whichToolIsNeeded
                    && key !== strInReqLan.whichEquipmentIsNeeded && key !== strInReqLan.howMuchIsNeeded) {
                    console.log(key, "validoption")
                    // let arrayForEach = [];

                    // arrayForEach.push(key)
                    dropdownForPr[key] = []

                    for (var i = 0; i < prData[key].length; i++) {
                        dropdownForPr[key].push(prData[key][i].optionName)

                    }
                    // headingForPr.push(arrayForEach)

                }


                // else if (prData[key][i].selected === true && key === strInReqLan.defectThatNeed || key !== strInReqLan.whichSafetyEquipment || key !== strInReqLan.whichToolIsNeeded
                //     || key !== strInReqLan.whichEquipmentIsNeeded || key !== strInReqLan.howMuchIsNeeded) {
                //     console.log(key, "validoption")
                //     // let arrayForEach = [];

                //     // arrayForEach.push(key)
                //     checkboxForPr[key] = []

                //     for (var i = 0; i < prData[key].length; i++) {
                //         checkboxForPr[key].push(prData[key][i].optionName)

                //     }
                //     // headingForPr.push(arrayForEach)

                // }


            }












            // for (var i = 0; i < prData[key].length; i++) {

            //     console.log(prData[key], "optionheads")
            //     console.log(prData[key][i], "optionName")



            //     if (prData[key][i].selected === true && key === strInReqLan.defectThatNeed || key !== strInReqLan.whichSafetyEquipment || key !== strInReqLan.whichToolIsNeeded
            //         || key !== strInReqLan.whichEquipmentIsNeeded || key !== strInReqLan.howMuchIsNeeded) {
            //         console.log(key, "validoption")
            //         // let arrayForEach = [];

            //         // arrayForEach.push(key)
            //         checkboxForPr[key] = []

            //         for (var i = 0; i < prData[key].length; i++) {
            //             checkboxForPr[key].push(prData[key][i].optionName)

            //         }
            //         // headingForPr.push(arrayForEach)

            //     }


            // }














        }
        console.log(dropdownForPr, "dropdownForPrdropdownForPr")
        console.log(checkboxForPr, "checkboxForPr")




        return (
            <View>
                {
                    Object.keys(dropdownForPr).map((heading, index) => {

                        console.log(heading, dropdownForPr[heading], "dropdownClonedropdownClonedropdownClone")
                        // console.log(that.state.selectedPr, "dropdownClonedropdownClonedropdownClone")
                        return (
                            <Item style={styles.input} >
                                <Picker mode="dropdown" style={{ marginRight: 5 }} selectedValue={this.props.selectedOption[heading]}
                                    onValueChange={this.props.onChangeFunc.bind(that, index, heading)} >
                                    <Items style={{ fontSize: 12 }} label={heading} value={""} />
                                    {
                                        dropdownForPr[heading].map((optionName, index) => {
                                            console.log(optionName, index, "optionName, index")
                                            return (
                                                <Items style={{ fontSize: 12 }} label={optionName.toLocaleLowerCase()} value={optionName} key={index} />

                                            )
                                        })
                                    }

                                </Picker>
                            </Item>
                        )
                    })
                }

                {/* <View style={{marginTop:10}}> */}


                {/* <SelectMultiple
                        style={{ backgroundColor: "red",width:"50%",height:"20%" }}
                        items={fruits}
                        selectedItems={this.state.selectedFruits}
                        onSelectionsChange={this.onSelectionsChange} /> */}

                {
                    Object.keys(checkboxForPr).map((heading, index) => {

                        console.log(heading, checkboxForPr[heading], checkboxForPr, "checkboxForPr")
                        // console.log(that.state.selectedPr, "dropdownClonedropdownClonedropdownClone")
                        return (



                            <View style={{ width: "100%", marginTop: 10 }} key={index}>

                                <Text style={{ fontWeight: "bold" }}>
                                    {heading}
                                </Text>
                                <SelectMultiple
                                    rowStyle={{ height: 45 }}
                                    labelStyle={{ fontSize: 12 }}
                                    items={checkboxForPr[heading]}
                                    selectedItems={this.props.selectedOption[heading]}
                                    onSelectionsChange={this.props.onChangeFuncForCheck.bind(that, heading)}
                                />

                            </View>
                        )
                    })
                }



                {/* </View> */}

                {
                    (additionalForPr.length !== 0) ?
                        (
                            <View style={{ width: "101%", marginTop: 10 }} >

                                <Text style={{ fontWeight: "bold" }}>
                                    {strInReqLan.addRepoForPR}
                                </Text>
                                <SelectMultiple
                                    rowStyle={{ height: 45 }}
                                    labelStyle={{ fontSize: 12 }}
                                    items={additionalForPr}
                                    selectedItems={this.props.selectedOption[strInReqLan.addRepoForPR]}
                                    onSelectionsChange={this.props.onChangeFuncForCheck.bind(that, strInReqLan.addRepoForPR)}
                                // onValueChange={this.props.onChangeFunc.bind(that, index, heading)} 
                                />

                            </View>

                        ) :
                        (null)
                }








            </View>

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














// ***********************
// ***********************
// ***********************
// ***********************

// {
//     let that = this.props.that;


//     let prData = this.props.prClone;
//     console.log(prData, "4545555555555")
//     let headingForPr = []
//     for (var key in prData) {
//         // console.log(key, "key")
//         // console.log(prData[key], "prData")
//         if (key === "prAdditionalDataArr") {
//             console.log(prData[key][0], "prAdditionalDatarr")
//             for (var property in prData[key][0]) {
//                 console.log(property, "property", prData[key][0][property])
//                 if (prData[key][0][property] !== "" && property === "generalObservations") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.generalObservations)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "requestedService") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.requestedService)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "serviceYouHaveDone") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.serviceYouHaveDone)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "codeOrOmFromTheCustomer") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.codeOrOmFromTheCustomer)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "customersOsNumber") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.customersOsNumber)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "discribeWhenMarkedAbove") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.discribeWhenMarkedAbove)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "kmReport") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.kmReport)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "overtimeReason") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.overtimeReason)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "reportTheCID") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.reportTheCID)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "reportTheDates") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.reportTheDates)

//                 }
//                 else if (prData[key][0][property] !== "" && property === "reportTheDatesCompensate") {
//                     console.log("takli")
//                     headingForPr.push(strInReqLan.reportTheDatesCompensate)

//                 }

//             }




//         }



//         for (var i = 0; i < prData[key].length; i++) {

//             console.log(prData[key], "optionheads")
//             console.log(prData[key][i], "optionName")
//             if (prData[key][i].selected === true) {
//                 console.log(key, "validoption")
//                 headingForPr.push(key)
//             }


//         }

//     }





//     return (
//         <Item style={styles.input} >













//             <Picker mode="dropdown" style={{  marginRight: 5 }}  selectedValue={that.state.selectedPr} onValueChange={this.props.onChangeFunc.bind(that)} >
//                 <Items style={{ fontSize: 12 }} label={strInReqLan.selectpreregistration} value={""} />

//                 {
//                     headingForPr.map((key, index) => {
//                         return (
//                             <Items style={{ fontSize: 12 }} label={key.toLocaleLowerCase()} value={key} key={index} />
//                         )

//                     })
//                 }

//             </Picker>
//         </Item>

//     );
// }







// ***********************
// ***********************
// ***********************
// ***********************
// ***********************