import { Button, StyleSheet, View,Text } from "react-native";

const Main = ({navigation}) =>
  {
      return(

          <>
          <View style={styles.container}>
<Text style={styles.text}>
  hey bro
</Text>
<Button title="go back" onPress={() => navigation.navigate('Home')} />



          </View>





          </>
      )
  }

  export default Main;

  const styles = StyleSheet.create({

      container:{

          flex:1,
          justifyContent:"center",
          alignItems:"center"
      },
      text:{
          color:"red",
          justifyContent:"center"
      }
  })