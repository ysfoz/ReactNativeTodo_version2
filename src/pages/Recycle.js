import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList,TouchableOpacity } from 'react-native'

import { DeletedCard } from '../components/DeletedCard';
import {deleted} from '../styles'

const Recycle = (props) =>{
  const [selected,setSelected] = useState([])
  const displayedList = props.route.params.displayList // bunu guncelleyerek yapmak lazim yoksa sadece silinnler geliyor.her silindiginde sifirliyor.

  
  
  
  function deleteItem(item){
    
      const ResycleList = [...displayedList]
      const index = displayedList.indexOf(item)
      ResycleList.splice(index,1)
      setSelected(ResycleList)
     
      
    }

  
  const renderTodo = ({item}) => {
    return (
          <DeletedCard
              data = {item}
              onDeleteItem ={()=> deleteItem(item)}
              />
    )}


    return (
        <SafeAreaView style = {{flex:1}}>
          <FlatList
          style={deleted.container}
          data= {selected==false ? displayedList:selected}
          renderItem = {renderTodo}
          />
          <TouchableOpacity>
            <Text style= {deleted.touch}>❌Clear All❌</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export  default Recycle;