/**
 * AddTasksModal
 *
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';


export default class AddTaskModal extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      taskTitle: ''
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>

        <View style={styles.container}>

          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('./../images/remindMe-logo.png')} />
          </View>
          <View>
          <Text>Agregar Tarea</Text>
           <TextInput
             placeholder={'Titulo'}
             onChangeText={ ( text )=>{ this.setState({ taskTitle: text })  } }
             style={styles.input}/></View>
          <View style={styles.body}>
            <TouchableHighlight style={styles.buttonAgregar} onPress={ ()=>{ this.props.addTask( this.state.taskTitle ),this.props.hideModal() } }>
              <Text style={styles.buttonAgregarText}>AGREGAR</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonCancelar} onPress={ ()=>{ this.props.hideModal() } }>
              <Text style={styles.buttonCancelarText}>CANCELAR</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, .35)'
  },
  container: {
    height: 405,
    width: 290,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: -20
  },
  header: {
    backgroundColor: 'rgb(237,24,74)',
    width: 290,
    height: 200
  },
  body:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 285,
    height: 75,
    marginTop: 60,
    justifyContent: 'center'
  },
  buttonAgregarText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center'
  },
  buttonCancelarText: {
    color: 'rgb(237,24,74)',
    fontSize: 17,
    textAlign: 'center'
  },
  buttonAgregar: {
    backgroundColor: 'rgb(237,24,74)',
    height: 50,
    width: 225,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 27,
    justifyContent: 'center'
  },
  buttonCancelar: {
    backgroundColor: 'white',
    height: 45,
    width: 220,
    padding: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgb(237,24,74)',
    borderRadius: 27,
    justifyContent: 'center'
  },
  input: {
    fontSize: 30,
    justifyContent: 'center'
  }
});
