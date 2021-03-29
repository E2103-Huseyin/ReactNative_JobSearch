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
        backgroundColor: "#6c6",
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

export const styleModal = StyleSheet.create({
    text: {
        backgroundColor:"white",
        borderRadius: 10,        
        padding: 6,
        borderColor: "green",
        borderWidth:5,
        borderStyle: "solid"

    },
    logo: {
        width: 150,
        height: 100,
        alignSelf: "center",
        margin:8

    },
    text1: {
        color: "#835",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",

    },
    text2: {
        // color: "#835",
        fontSize: 18,
        padding:8,
        borderColor: "pink",
        borderBottomWidth:2,
        borderStyle: "solid",
        marginBottom:3
        // fontWeight: "bold",

    },
    text3: {
        color: "black",
        fontSize: 13,
        margin:8,
        

        
        // padding:10
        // fontWeight: "bold",

    },
    text4: {
        backgroundColor:"pink",
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        marginHorizontal: 10,
        textAlign: "center"
        
        // padding:10
        // fontWeight: "bold",

    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 10,
        maxHeight:100
      },
  

    
})
