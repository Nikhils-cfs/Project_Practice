import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf8ff',
    padding: 20,
    flex: 1,
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
    height: 260,
    justifyContent: 'space-between',
  },
  image: {
    height: 120,
    width: 110,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  brand: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  model: {
    fontSize: 14,
    color: '#374151',
    marginVertical: 2,
  },
  price: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 14,
  },
  discount: {
    color: '#dc2626',
    fontWeight: '600',
    fontSize: 12,
  },
  likes: {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    marginTop: 10,
  },
});
