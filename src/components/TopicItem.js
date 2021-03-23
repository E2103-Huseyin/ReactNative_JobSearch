import React from "react";
import {TouchableOpacit, Text, TouchableOpacity} from "react-native";
import {styletopicitem, } from "../Style";
const TopicItem = (props) => {

    



    return (
        <TouchableOpacity 
            style={[styletopicitem.container, {backgroundColor:props.item.color }]}
            onPress={props.onSelect}
        >
            <Text style={styletopicitem.text}> {props.item.name}</Text>
        </TouchableOpacity>

    );
};

export {TopicItem};