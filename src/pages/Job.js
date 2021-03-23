import React, {useState, useEffect} from "react";
import Axios from "axios";
import {SafeAreaView, View, Text, FlatList} from "react-native";
import {JobItem} from "../components";
import {styleJobItem} from "../Style"

const Jobs = (props) =>{
    const [data, setData]= useState([])
    console.log("props",props)
    const {selectedLanguage} = props.route.params;

    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
        setData(response.data)
        console.log("response",data);

    }

    useEffect(()=> {
        fetchData();   
    }, []);

    const renderJobs = ({item})=> <JobItem job={item}/> ;

    return(
        <SafeAreaView>
            <View>
                
                <Text style={styleJobItem.jobname}>
                Selected Job: {selectedLanguage}
                </Text>
                <FlatList
                    data={data}
                    renderItem={renderJobs}

                
                
                
                />
            </View>
        </SafeAreaView>
    )
};

export {Jobs};