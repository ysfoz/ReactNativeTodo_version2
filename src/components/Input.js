import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {input} from '../styles';

const Input = (props) => {
const [text,setText] = useState('')

const [number,setNumber] = useState('')
 // burda kaldim. 1 ile 3 arasinda bir sayi girmek lazim, ona gore inpur backcolorlari farkli renk olacak. 
 
  return (
    <View style={input.inputContainer}>
      <View style={input.textInputContainer}>
        <TextInput
        style={input.textInput}
        placeholder = '     ✏️ Type something to do ✏️'
        onChangeText = {(text) =>  setText(text)}
        clearTextOnFocus='true'
        clearButtonMode= 'always'
        setText = ''
        
        />
        <TextInput
        style={input.textInput}
        placeholder = '      ⚠️       Importance 1-3       ⚠️'
        placeholderTextColor = 'crimson'
        onChangeText = {(number) => (0 < number) && (number < 4) ? setNumber(number) : alert('between 1 and 3') } 
        keyboardType = 'numeric'
        clearButtonMode= 'always'
        clearTextOnFocus='true'
        
        
        />
      </View>
      <TouchableOpacity 
      style = {input.touch}
      onPress={() => 
        {props.onTodoPress(text,number);
        setNumber('');
        setText('')
        }} // buraya number ekledim .. bos olsada basiyor , son girilen degerler kaliyor.
      
      
      >
        
        <Text style ={ input.touchText}>Add Todo</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export {Input};

