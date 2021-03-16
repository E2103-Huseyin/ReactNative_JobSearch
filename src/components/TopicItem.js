import React from "react";
import {TouchableOpacit, Text, TouchableOpacity} from "react-native";

const TopicItem = (props) => {
    return (
        <TouchableOpacity>
            <Text> {props.item.name}</Text>
        </TouchableOpacity>

    );
};

export {TopicItem};