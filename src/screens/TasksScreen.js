/*
* TasksScreen
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import Tareas from './../components/Tareas';

export default class TasksScreen extends Component<Props>{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
      <TasksHeader toBeComplete={28}/>
      <View style={styles.tasksContainer}>
      <Tareas renderTasks/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tasksContainer: {
    flex: 1
  }
});
