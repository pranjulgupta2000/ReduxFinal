import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground, FlatList, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TimeTable() {

    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [datetime, setDateTime] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [filterToday, setTodayFilterData] = useState([]);
    const [filterUpcoming, setFilterUpcoming] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [filterPending, setFilterPending] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let getRemindersFromLocalStorage = [];
        let filterTodayArray = [];
        let filterUpcomingArray = [];
        getRemindersFromLocalStorage = JSON.parse(await AsyncStorage.getItem('reminderList'));
        console.log(getRemindersFromLocalStorage);
        let today = new Date();
        let currDate = Moment(today).format("DD-MM-YYYY");
        console.log(currDate);
        console.log(getRemindersFromLocalStorage.length);
        console.log(currDate[0, 1]);

        for (let i = 0; i < getRemindersFromLocalStorage.length; i++) {
            let date = getRemindersFromLocalStorage[i].date;
            if (date == currDate) {
                console.log("in if");
                filterTodayArray.push(getRemindersFromLocalStorage[i]);
            }
            // else if ($.datepicker.parseDate('DD-MM-YYYY', currDate) > $.datepicker.parseDate('DD-MM-YYYY', date)) {
            //     console.log("in elseif");
            //     filterPending.push(getRemindersFromLocalStorage[i]);
            // }
            // else if (process(currDate) > process(date)) {
            //     filterPendingArray.push(getRemindersFromLocalStorage[i]);
            // }
            else {
                filterUpcomingArray.push(getRemindersFromLocalStorage[i]);
            }
        }
        setTodayFilterData(filterTodayArray);
        setFilterUpcoming(filterUpcomingArray);
    }
    // function process(date) {
    //     var parts = date.split("/");
    //     return new Date(parts[2], parts[1] - 1, parts[0]);
    // }


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (datetime) => {
        console.warn("A date has been picked: ", datetime);
        console.log(datetime);
        setDateTime(datetime);
        hideDatePicker();
    };
    const setReminderToStore = async () => {
        setModalVisible(!modalVisible);
        console.log("storage");
        let getRemindersFromLocalStorage = await AsyncStorage.getItem("reminderList");
        let reminderData = getRemindersFromLocalStorage ? JSON.parse(getRemindersFromLocalStorage) : [];
        const data = {
            id: Number(new Date()),
            title: title,
            date: Moment(datetime).format("DD-MM-YYYY"),
            time: Moment(datetime).format("HH:mm"),
            //image: image ? image : "null"
        };
        reminderData.push(data);
        console.log('data' + JSON.stringify(data));
        console.log(reminderData);
        await AsyncStorage.setItem("reminderList", JSON.stringify(reminderData));
        fetchData();
    };
    // const modalOpen = () => {
    //     console.log("Hiii");
    //     setEditModal(true);
    //     <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={editModal}
    //         onRequestClose={() => {
    //             setEditModal(!editModal);
    //         }}
    //     >
    //         <View style={styles.centeredView}>
    //             <View style={styles.modalView}>
    //                 {/* <TouchableOpacity onPress={hideModal}> */}
    //                 {/* <Ionicons name="close-circle-outline" size={22} /> */}
    //                 {/* </TouchableOpacity> */}
    //                 <Text style={{ color: 'white' }}>Enter Title</Text>
    //                 <TextInput style={{ borderColor: 'white' }}
    //                     onChangeText={(title) => setTitle(title)}
    //                     placeholder={"Type here"}
    //                 />

    //                 <View style={{ flexDirection: 'row', marginTop: '4%', marginBottom: '4%' }}>
    //                     <Button title="Date" onPress={showDatePicker} />
    //                     <DateTimePickerModal
    //                         isVisible={isDatePickerVisible}
    //                         mode="datetime"
    //                         onConfirm={handleConfirm}
    //                         onCancel={hideDatePicker}
    //                     />
    //                     <Text style={{ color: 'white', marginTop: '4%' }}>  {datetime ? Moment(datetime).format("DD-MM-YYYY ,HH:mm") : ""}   </Text>


    //                 </View>

    //                 {/* <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
    //                         <Button title="delete" />
    //                         <Text>               </Text>
    //                         <Button title="save" />
    //                     </View> */}
    //                 <Button style={{ marginLeft: 50 }}
    //                     onPress={() => {
    //                         setReminderToStore()
    //                     }
    //                     }
    //                     title="Create"
    //                 ></Button>
    //             </View>
    //         </View>
    //     </Modal>
    // }

    const deleteReminder = async (id) => {
        console.log("inside delete");
        console.log("id" + id);
        let taskObj = [];
        taskObj = JSON.parse(await AsyncStorage.getItem("reminderList"));
        console.log("length" + taskObj.length);

        let i;
        for (let j = 0; j < taskObj.length; j++) {
            if (taskObj[j].id == id) {
                i = j;
                break;
            }
        }
        taskObj.splice(i, 1);
        await AsyncStorage.setItem("reminderList", JSON.stringify(taskObj));
        fetchData();
    }
    const storyItem = ({ item }) => {
        return (

            <View style={styles.UserInfo}>
                <View style={styles.TextSection}>
                    <View style={styles.UserInfoText}>
                        <Text style={styles.UserName}>{item.title}</Text>
                        <TouchableOpacity style={{ backgroundColor: 'white' }} onPress={() => { deleteReminder(item.id) }}><Text style={styles.PostTime}>Delete</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.MessageText}>{item.date}|||{item.time}</Text>
                </View>
            </View>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    TimeTable
                </Text>
            </View>
            <View style={styles.firstHeadingContainer}>
                <Text style={styles.firstHeading}>
                    Today's Reminders
                </Text>
            </View>
            <View style={styles.currentReminderContainer}>
                <FlatList
                    data={filterToday}
                    renderItem={storyItem}>
                </FlatList>

            </View>
            <View style={styles.firstHeadingContainer}>
                <Text style={styles.secondHeading}>
                    Upcoming Reminders
                </Text>
            </View>
            <View style={styles.upcomingReminderContainer}>
                <FlatList
                    data={filterUpcoming}
                    renderItem={storyItem}>
                </FlatList>
            </View>

            <View style={styles.buttonView}>
                {/* <Button title='Create Reminders' onPress={() => { setModalVisible(true) }} style={styles.button} /> */}
                <TouchableOpacity onPress={() => { setModalVisible(true) }}><Text style={{
                    color: 'black', fontSize: 30,
                    backgroundColor: 'white', borderRadius: 20
                }}>Add + </Text></TouchableOpacity>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <TouchableOpacity onPress={hideModal}> */}
                        {/* <Ionicons name="close-circle-outline" size={22} /> */}
                        {/* </TouchableOpacity> */}
                        <Text style={{ color: 'white' }}>Enter Title</Text>
                        <TextInput style={{ borderColor: 'white' }}
                            onChangeText={(title) => setTitle(title)}
                            placeholder={"Type here"}
                        />

                        <View style={{ flexDirection: 'row', marginTop: '4%', marginBottom: '4%' }}>
                            <Button title="Date" onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <Text style={{ color: 'white', marginTop: '4%' }}>  {datetime ? Moment(datetime).format("DD-MM-YYYY ,HH:mm") : ""}   </Text>


                        </View>

                        {/* <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
                            <Button title="delete" />
                            <Text>               </Text>
                            <Button title="save" />
                        </View> */}



                        <Button style={{ marginLeft: 50 }}
                            onPress={() => {
                                setReminderToStore()
                            }
                            }
                            title="Create"
                        ></Button>
                    </View>
                </View>
            </Modal>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    headingContainer: {
        backgroundColor: "pink",
        alignItems: 'center',
        height: '10%',

    },
    firstHeadingContainer: {
        alignItems: 'center',
        height: '10%',

    },
    heading: {
        alignContent: 'center',
        fontSize: 40,
        color: 'black'
    },
    firstHeading: {
        alignContent: 'center',
        fontSize: 40,
        color: 'black'
    },
    secondHeading: {
        alignContent: 'center',
        fontSize: 30,
        color: 'black',
        justifyContent: 'center',
        marginTop: '4%'
    },
    currentReminderContainer: {
        backgroundColor: 'pink',
        height: '25%'
    },
    upcomingReminderContainer: {
        backgroundColor: 'pink',
        height: '37%'
    },
    buttonView: {
        width: '100%',
        // height:'20%',
        //marginLeft: 180,
        //backgroundColor:'red',
        marginTop: 10,
        alignItems: 'center'
    },
    Btn: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "skyblue",
    },
    containermodal: {
        flew: 1,
        flexDirection: "row"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // height:'50%'


    },
    modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    UserInfo: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        color: 'black',
        marginLeft: 10,
        width: '100%',
        borderBottomWidth: 1

    },
    UserInfoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        color: 'black'
    },
    UserName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',

    },
    PostTime: {
        fontSize: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: 'black',
    },
    MessageText: {
        fontSize: 14,
        color: 'black',
    }


})