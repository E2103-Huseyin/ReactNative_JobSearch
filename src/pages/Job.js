import React, {useState, useEffect} from "react";
import Axios from "axios";
import {SafeAreaView, View, Text, FlatList,Button,Image,ScrollView} from "react-native";
import {JobItem} from "../components";
import {styleJobItem, styleModal} from "../Style"
import Modal from 'react-native-modal';

const Jobs = (props) =>{
    const [data, setData]= useState([]);
    const [modalFlag , setModalFlag]= useState(false);
    const [selectedJob , setSelectedJob]= useState("");
    console.log("data",data)
    const {selectedLanguage} = props.route.params;

    
    const [isModalVisible, setModalVisible] = useState(false);
        
    const toggleModal = () => {
        setModalFlag(!modalFlag);
    };


    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
        setData(response.data)
        console.log("response",data);

    }

    useEffect(()=> {
        fetchData();   
    }, []);

    const onJobSelec = (job)=>{
        setModalFlag(true)
        setSelectedJob(job)
    }

    const renderJobs = ({item})=> <JobItem job={item} onSelect={()=>onJobSelec(item)}/> ;

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

                <Modal isVisible={modalFlag}>
                <Image
                    style={styleModal.logo}
                    source={{uri: `${selectedJob.company_logo}`}}
                
                />
                    <View style={styleModal.text}>
                        <Text style={styleModal.text1}>Title: {selectedJob.title}</Text>
                        <Text style={styleModal.text2}>Company:{selectedJob.company}</Text>
                        <Text style={styleModal.text2}>Location:{selectedJob.location}</Text>
                        <Text style={styleModal.text2}>Type: {selectedJob.type}</Text>
                        <Text style={styleModal.text2}>{selectedJob.company_url}</Text>
                        <Text style={styleModal.text2}>{selectedJob.created_at}</Text>
                        {/* <Text style={styleModal.text4}>{selectedJob.how_to_apply}</Text> */}
                        <Text style={styleModal.text4}>Description:</Text>
                        <ScrollView style={styleModal.scrollView}>
                            <Text style={styleModal.text3}>{selectedJob.description}</Text>
                        </ScrollView>
                    </View>
                    <Button title="Hide modal" onPress={toggleModal} />
                    
                </Modal>
            </View>
        </SafeAreaView>
    )
};

export {Jobs};

// company: "Diaz IT Consulting"
// company_logo: null
// company_url: "http://http"
// created_at: "Sat Mar 27 15:39:37 UTC 2021"
// description: "<p>Consultoria sediada em São Paulo, face às crescentes demandas em desenvolvimento web para atendimento de clientes do setor financeiro no mercado americano, necessita contratar desenvolvedor (a) Full stack Pleno/Sênior.</p>↵<p>OBS: Caso o profissional atue apenas como front-end ou backend, também atende.</p>↵<p>REQUISITOS</p>↵<ul>↵<li>↵<p>Experiência com Nodejs ou Serverless com Java, C# ou Python (back-end)</p>↵</li>↵<li>↵<p>Experiência com Angular 2+(front-end)</p>↵</li>↵</ul>↵<p>Inglês técnico e Português fluente</p>↵<p>CANDIDATOS QUE RESIDAM EM TODO O BRASIL PODEM APLICAR.</p>↵<p>Home-office (será negociável presença pós-pandemia)</p>↵<p>CONTRATO PJ - INDETERMINADO - PERÍODO INTEGRAL</p>↵"
// how_to_apply: "<p>Interessados, por favor, enviem CV para:↵<a href="mailto:alessandra.rabelo@tecnovagas.com.br">alessandra.rabelo@tecnovagas.com.br</a></p>↵"
// id: "1af75875-5eab-4ba5-8918-7814c953c106"
// location: "São Paulo/Brasil"
// title: "Desenvolvedor (a) Full Stack (Node, Serverless ou Angular 2+)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/1af75875-5eab-4ba5-8918-7814c953c106"