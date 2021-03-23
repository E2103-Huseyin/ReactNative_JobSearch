import React from "react";
import {SafeAreaView, View, Text, ScrollView} from "react-native";
import {TopicItem} from "../components";
import {styleintroduction} from "../Style";


const topics = [
    {
      id: 0,
      name: 'Java',
      color: '#fb5607'
    },
    {
      id: 1,
      name: 'Python',
      color: '#007f5f'
    },
    {
      id: 2,
      name: 'Javascript',
      color: '#ffb703'
    },
    {
      id: 3,
      name: '.NET',
      color: '#023e7d'
    },
    {
      id: 4,
      name: 'Dart',
      color: '#001845'
    },
    {
      id: 5,
      name: 'Go',
      color: '#f8961e'
    },
    {
      id: 6,
      name: 'Ruby',
      color: '#e63946'
    },
    {
      id: 7,
      name: 'C',
      color: '#fb8b24'
    },
    {
      id: 8,
      name: 'C++',
      color: '#06d6a0'
    },
  
  ]
const Introduction = (props) =>{

    function selectLanguage(lang){
      props.navigation.navigate("Jobs", { selectedLanguage: lang})
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#fbc"}}>
            <View style={{flex: 1}}>
                <View style={styleintroduction.banner}>
                    <Text style={styleintroduction.bannertext}>
                        INTRODUCTION
                    </Text >
                </View>

                <ScrollView
                    horizontal
                    contentContainerStyle={{ alignItems: "center"}}

                >
                    {/* map funk asks/wants uniqe key or index   map(t,i)   i:index*/}
                    {topics.map((t)=> {
                      return(
                        < TopicItem 
                          key={t.id} 
                          item={t} 
                          onSelect={()=>selectLanguage(t.name)}
                        />
                      );
                    })}   
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

export {Introduction};