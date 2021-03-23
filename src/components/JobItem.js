import React from 'react'
import {TouchableOpacity, Text} from "react-native"
import {styleJobItem} from "../Style"
const JobItem = (props) => {
    return (
        <TouchableOpacity style={styleJobItem.container}>
            <Text style={styleJobItem.jobtitle}>{props.job.title}</Text>
            <Text style={styleJobItem.jobLocation}>{props.job.location}</Text>
        </TouchableOpacity>
    )
}

export  {JobItem};
