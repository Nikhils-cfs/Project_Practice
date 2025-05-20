import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ddd',
  
  },
  border:{
    padding:20,
    paddingBottom:100,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111',
    backgroundColor:'#888',
    textAlign:'center',
  },
  intro: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
    color: '#222',
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
  },
  close:{
textAlign:'center',
fontWeight:'bold',
  },
});