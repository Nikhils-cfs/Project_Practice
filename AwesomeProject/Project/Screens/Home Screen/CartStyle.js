import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: 'skyblue',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    fontSize: 14,
    color: '#2563eb',
    marginTop: 4,
  },

  checkbox: {
    marginRight: 12,
  },

  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  swipeDelete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#6b7280',
  },
  category: {
    color: '#6b7280',
    fontSize: 13,
    marginTop: 4,
  },

  description: {
    color: '#4b5563',
    fontSize: 13,
    marginTop: 2,
  },
});
