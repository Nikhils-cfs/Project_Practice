import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptyText: {
    color: 'gray',
    fontSize: 16,
  },
  scrollContainer: {
    paddingTop:25,
    height: 250, 
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    width: 200,
    alignItems: 'center',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    color: '#1e3a8a',
    marginBottom: 6,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
});
