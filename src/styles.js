import {Dimensions, StyleSheet} from 'react-native';

const main = StyleSheet.create({
    titleContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        marginTop:10

    },
    titleText:{
        fontSize:35,
        fontWeight:'bold',
        color:'#00e676'

    },
    emptyComponent:{
       fontSize:20,
        color:'azure',
        alignSelf:'center',
        marginTop:10,
        fontWeight:'bold'
    },
    image:{
        
        position:'absolute',
        bottom:3,
        left:340,
        tintColor:'#102027'
        
    }
})

const input = StyleSheet.create({
    inputContainer:{
       backgroundColor:'#00e676',
        
    },
    textInputContainer:{
        backgroundColor:'#102027',
        padding:10,
        margin:1,
        borderRadius:4,
        fontSize:25

    },
    textInput:{
        fontSize:25,
        marginVertical:1,
        padding:10,
        borderRadius:4,
        backgroundColor:'lightgray',
       
        
    },
    touch:{
        backgroundColor:'#102027',
        marginRight:Dimensions.get('screen').width * 0.25,
        marginLeft:Dimensions.get('screen').width * 0.05,
        borderRadius:7,
        marginVertical:7

        

    },
    touchText:{
    fontSize:20,
    textAlign:'center',
    padding:15,
    fontWeight:'bold',
    color:'white'
    
    }
})

const todoCard = StyleSheet.create({
    Container:{
        backgroundColor:'lightgray',
        marginHorizontal:10,
        borderRadius:8, 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },

    text:{
        fontSize:15,
        padding:10,

    }
})

const deleted = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#102027',
        
    },
    touch:{
        fontSize:30,
        textAlign:'center',
        color:'crimson'
        
    },
    titleContainer:{
        backgroundColor:'#102027',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        marginVertical:20
        
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#00e676'  
    }
})

export {main,input,todoCard,deleted};