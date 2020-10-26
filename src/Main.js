import React, { useState } from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView, FlatList,TouchableOpacity, Image} from 'react-native';

import { main } from './styles';
import {Input , TodoCard} from './components'
import { set } from 'react-native-reanimated';

let completed = 0
const Main = (props) => {
  console.log(completed)
  const [list ,setList] = useState([]);
  list.sort(function(a,b){
    return a.importance -b.importance
  })
  const [deletedList,setDeletedList] = useState([])
  completedItems()
    function addTodo(text,number) {
        const y = new Date().getFullYear()
        const m = new Date().getMonth()
        const d = new Date().getDay()
        const todoItem = {
            id: list.length,
            todo: text,
            isDone: false,
            date: d + '.' + m + '.' + y,
            importance: number,
        }
       
        text && number != '' ? setList([todoItem,...list]) : null
        
    }
    
function completedItems() {
  const newArray = [...list]
  completed = newArray.filter(x => x.isDone == true).length

}

    function doneTodo(todoId) {
      const newArray = [...list]
      const todoIndex = newArray.findIndex(x => x.id == todoId);
      newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
      
      console.log(completed)
      setList(newArray)
    }
    function removeTodo(todoId) {
      const newArray = [...list];
      const todoIndex = newArray.findIndex(x =>x.id ==todoId);
      const deletedItem = newArray.splice(todoIndex,1);
      
      setList(newArray);
      setDeletedList([...deletedItem,...deletedList])
      
      
      
    }

    const renderTodo = ({item}) => {
      return (
            <TodoCard
                data = {item}
                onDone = {() => doneTodo(item.id)}
                onRemove = {() => removeTodo(item.id)}
                />

      )}

    


  return (
    <SafeAreaView 
    style={{
        backgroundColor:'#102027',
        flex:1
    }}>
      <KeyboardAvoidingView style={{flex:1}} behavior= {Platform.OS === "ios" ? "padding" : null }>
        <View style={main.titleContainer}>
          <Text style={main.titleText}>Todo</Text>
  <Text style={main.titleText}>{list.length}</Text>
        </View>
        <View style={main.titleContainer}>
          <Text style={main.titleText}>Completed</Text>
  <Text style={main.titleText}>{completed}</Text>
        </View>
        <FlatList
        keyExtractor={(item,index) => index.toString()}
        data= {list}
        renderItem = {renderTodo}
        ListEmptyComponent = {() => <Text style ={main.emptyComponent}>Nothing to do . . . </Text>}

        />     
        <Input
        onTodoPress={((todoText,todoNumber) => addTodo(todoText,todoNumber))}// buraya da 2. parametre ekledim
            />

        <TouchableOpacity 
            
            onPress = {() => props.navigation.navigate('Recycle',{
              displayList:deletedList})}
        >
        <Image
        style = {main.image}
        source = {require('./assets/trash.png')}
        />
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;

// 1. completed alani olusturulacak isodne true olanlar sayilaak
// 2.cop kutusu olusturulacak. 2. bir liste olusturulup silinenler o listeye atilacak
// 3. butona tiklandiginnda navigation sayesinde o sayfaya yonlendirilecek
// 4. flat list icerisinde silinenleer gosterilecek