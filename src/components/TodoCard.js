import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {todoCard} from '../styles';

const TodoCard = (props) => {
  function whichColor () {
    if(props.data.importance == 1){
      return '#ff7043'
    }else if (props.data.importance == 2){
      return '#ffb74d'
    }else if (props.data.importance == 3){
      return '#ffee58'
    }
  }
  const d = new Date()
  return (
    <TouchableOpacity 
    style={[todoCard.Container,{backgroundColor:whichColor() }]}
    onPress={()=> props.onDone()}
    onLongPress={() =>{ 
        props.onRemove();
        props.onSender();
      }}
    >
      
      <Text style={[todoCard.text,{textDecorationLine: props.data.isDone ? 'line-through':null }]}>{props.data.todo}</Text>
      <Text style={[todoCard.text,{textDecorationLine: props.data.isDone ? 'line-through':null }]}>{props.data.date}</Text>
  
    </TouchableOpacity>
  );
};

export {TodoCard};