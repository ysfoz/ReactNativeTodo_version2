import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList,TouchableOpacity,Alert } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

import { DeletedCard } from '../components/DeletedCard';
import {deleted} from '../styles'

const Recycle = (props) =>{
  
  const displayedList = useSelector(state=>state.deletedList)
  const dispatch = useDispatch();

let index = 0
  function deleteItem(item){
     index = displayedList.indexOf(item)
    }
  
  const renderTodo = ({item}) => {
    return (
          <DeletedCard
              data = {item}
              onDeleteItem ={()=> deleteItem(item)}
              onSender = {()=> dispatch({
                type:'CLEAR_ITEM',
                payload:{INDEX:index}
              })}
              />
    )}


    const confirm = () =>
    Alert.alert(
      "Are You Sure",
      "Delete all",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch({type:'CLEAR_All'})}
      ],
      { cancelable: false }
    );
    
    return (
        <SafeAreaView style = {{flex:1,backgroundColor:'#102027'}}>
          <View style={deleted.titleContainer}>
            <Text style={deleted.titleText}>Removed TODO</Text>
            <Text style={deleted.titleText}>{displayedList.length}</Text>
          </View>
          <FlatList
          style={deleted.container}
          data= {displayedList}
          renderItem = {renderTodo}
          />
          <TouchableOpacity>
            <Text 
            style= {deleted.touch}
            onPress={() => confirm()}
             
            >❌   Clear All   ❌</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export  default Recycle;