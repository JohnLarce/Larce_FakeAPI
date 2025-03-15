import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color:'#ccc',
  },
  input: {
    width: '100%',
    color: '#ccc',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 14,
    borderRadius: 8,
    fontSize:18,
  },  
  loginButton: {
    width: '100%',
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 18,
  },
  loginText: {
    color: '#000000',  
    fontSize: 20,
    fontWeight: 'bold',
  },
});