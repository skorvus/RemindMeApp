import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class TasksHeader extends Component{

  constructor(props){
    super(props);
  }

  generateDate(){
    const daysOfTheWeek = ['Domingo','Lunes','Martes', 'Miércoles', 'Jueves','Viernes','Sábado'],
    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    const currentDate = new Date(),
    day = currentDate.getDay(),
    month = currentDate.getMonth(),
    year = currentDate.getFullYear(),
    date = currentDate.getDate();
    if(month==0){mes='Enero';}
    else if(month==1){mes='Febrero';}
    else if(month==2){mes='Marzo';}
    else if(month==3){mes='Abril';}
    else if(month==4){mes='Mayo';}
    else if(month==5){mes='Junio';}
    else if(month==6){mes='Julio';}
    else if(month==7){mes='Agosto';}
    else if(month==8){mes='Septiembre';}
    else if(month==9){mes='Octubre';}
    else if(month==10){mes='Noviembre';}
    else if(month==11){mes='Diciembre';}

    return `Sabado ${day} de ${mes} del ${year}`.toUpperCase();
  }

  render(){
    return(
      <View style={styles.headerContainer}>
      <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
      <Text style={styles.pendingTasksText}>Pendientes:{this.props.toBeComplete}</Text>
      <Text style={styles.dateText}>{this.generateDate()}</Text>
      </View>
    )
  }


}


const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  pendingTasksText: {
    fontSize: 36,
    color: 'white',
    marginTop: 25
  },
  dateText: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 8
  }
});
