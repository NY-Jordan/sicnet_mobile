import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding : 10,
      paddingTop : 50,
      backgroundColor : "white",
      height : "100%"
    },
    musicChoices : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : 'row',
        boder : '2px, black solid',
        margin  : 10
    },
    directionRow : {
        display : "flex",
        flexDirection : "row"
    },
    logo : {
        fontWeight : 'bold',
        fontStyle : "italic"
    },
    alignCenter : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    
   
    authInput : {
        backgroundColor : "white",
        height : 50,
        fontSize : 15
    },
    Largebutton : {
        margin : 10,
        width : "80%",
        borderRadius : 40,
        height : 50,
        backgroundColor : "#ffcc00",
        fontSize : "40px",
        textAlign : "center"
        
    }
   
  });
  