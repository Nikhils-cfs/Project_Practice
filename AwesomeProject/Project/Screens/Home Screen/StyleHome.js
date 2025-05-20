import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf8ff',
    padding: 20,
    // justifyContent:'space-around',
    // paddingBottom:30,
    flex: 1,
    // margin:10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#8DD8FF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,

   
    height: 320,
    justifyContent: 'space-between',
  },
  image: {
    height: 120,
    width: 110,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center', 
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    color: '#6b7280',
    fontSize: 12,
  },
  description: {
    color: '#374151',
    marginVertical: 4,
    fontSize: 12,
  },
  price: {
    color: '#2563eb',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  addtocart: {
    marginTop: 'auto', 
  },
  imagebg:{
    backgroundColor:'white',
    marginBottom:12,
    borderRadius:5,
    shadowOpacity:0.2,
    shadowColor:'#000',
     elevation: 10,
  }
});
