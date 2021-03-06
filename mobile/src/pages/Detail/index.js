import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.nome}, estou entrando em contato pois gostaria de ajudar no caso "${incident.titulo}", com o valor de ${Intl.NumberFormat('pt-br', { style:'currency', currency:'BRL'}).format(incident.valor)}`;


  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.titulo}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name ="arrow-left" size={25  } color="#e02041" />      
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.nome} de {incident.cidade}/{incident.uf}</Text>          
        

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.titulo}</Text>          

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-br', {
                style:'currency', 
                currency:'BRL'
          }).format(incident.valor)}  
        </Text>  
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso!</Text>        
        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>           
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>  
          </TouchableOpacity>            
        </View>
      </View>
    </View> 
  );
}
