import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {main} from './styles';
import {Input, TodoCard} from './components';
let deleted = {};

let completed = 0;
const Main = (props) => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  list.sort(function (a, b) {
    return a.importance - b.importance;
  });

  
  completedItems();
  function addTodo(text, number) {
    const y = new Date().getFullYear();
    const m = new Date().getMonth();
    const d = new Date().getDay();
    const todoItem = {
      id: list.length,
      todo: text,
      isDone: false,
      date: d + '.' + m + '.' + y,
      importance: number,
    };

    text && number != '' ? setList([todoItem, ...list]) : null;
  }

  function completedItems() {
    const newArray = [...list];
    completed = newArray.filter((x) => x.isDone == true).length;
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((x) => x.id == todoId);
    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }
  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((x) => x.id == todoId);
    deleted = newArray.splice(todoIndex, 1);

    setList(newArray);
  }

  const renderTodo = ({item}) => {
    return (
      <TodoCard
        data={item}
        onDone={() => doneTodo(item.id)}
        onRemove={() => removeTodo(item.id)}
        onSender={() =>
          dispatch({
            type: 'ADD_DELETED_ITEM',
            payload: {deletedItem: item},
          })
        }
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#102027',
        flex: 1,
      }}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        
          <View style={main.titleContainer}>
            <Text style={main.titleText}>Todo</Text>
            <Text style={main.titleText}>{list.length}</Text>
          </View>
          <View style={main.titleContainer}>
            <Text style={main.titleText}>Completed</Text>
            <Text style={main.titleText}>{completed}</Text>
          </View>
          <View style={{flex:1}}>

          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={list}
            renderItem={renderTodo}
            ListEmptyComponent={() => (
              <Text style={main.emptyComponent}>Nothing to do . . . </Text>
              )}
              />
          <Input
            onTodoPress={(todoText, todoNumber) =>
              addTodo(todoText, todoNumber)
            } 
            />

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Recycle')}>
            <Image style={main.image} source={require('./assets/trash.png')} />
          </TouchableOpacity>
            </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;
