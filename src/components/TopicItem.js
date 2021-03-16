import React from "react";
import {TouchableOpacit, Text, TouchableOpacity} from "react-native";

const TopicItem = (props) => {
    return (
        <TouchableOpacity>
            <Text> {props.title}</Text>
        </TouchableOpacity>

    );
};

export {TopicItem};