import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   switchToggle : {
        width : '100%' ,
        borderRadius : 40,
        height : 60,
        display :  "flex",
        flexDirection : 'row',
        alignItems : 'center',
        padding: 6,
        marginBottom : 20
   },
   ButtonToggle : {
        width : '50%',  
        display : "flex" ,
        alignItems : 'center',
        justifyContent : 'center',
   },
    ButtonToggleActive : {
        height:"100%",
        width:"100%",
        backgroundColor:'#ffff',
        display:"flex" ,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        
    }
  });
  