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

export const styleJobItem = StyleSheet.create({
    container: {
        // height: Dimensions.get("window").height / 3,
        // justifyContent: "center",
        // alignItems:    "center",
        margin: 10,
        padding: 12,
        borderWidth:2,
        borderBottomColor: "black",
        borderStyle: "solid",
        backgroundColor: "#686",
        borderRadius: 6,

    },
    jobname: {
        textAlign:"center",
        padding: 10,
        color:  "#000",
        fontSize: 18,
        fontWeight: "bold",

    },
    jobtitle: {
        color:  "#000",
        fontSize: 18,
        fontWeight: "bold",

    },
    jobLocation: {
        color:  "#fff",
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 5
    },

    
})
