import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Tareas extends Component{

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Comprar Leche', completed: false },
        { id: 2, title: 'Sacar la basura', completed: false },
        { id: 3, title: 'Lava los platos', completed: false },
        { id: 4, title: 'Organizar la peda', completed: false },
        { id: 5, title: 'Soportar la cruda', completed: false },
        { id: 6, title: 'Netflix and Chill', completed: false }
      ]
    }
  }
  renderTasks(){
    return(
      this.state.tasks.map((task)=>{
        return(
          <View key={task.id} style={styles.taskContainer}>
          <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')}/>
          <Text style={styles.taskText}>{task.title}</Text>
          </View>
        )
      })
    )
  }

  render(){
    return(
      <View style={styles.tasksContainer}>
      {this.renderTasks()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  tasksContainer: {
    backgroundColor: 'green',
    flex: 1
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  taskIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21,
  }
});
