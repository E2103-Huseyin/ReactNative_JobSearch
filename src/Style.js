import {StyleSheet, Dimensions} from "react-native";

export const styletopicitem = StyleSheet.create({
    container: {
        padding: 12,
        margin: 7,
        borderRadius: 6,
    },

    text: {
        fontWeight: "bold",
        color: "white",
    }
})

export const styleintroduction = StyleSheet.create({
    banner: {
        height: Dimensions.get("window").height / 3,
        justifyContent: "center",
        alignItems:    "center",
    },
    bannertext: {
        color:  "#fff",
    },

    
})
