import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#1e3a8a',
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    borderWidth: 2,
    borderColor: '#1e3a8a',
    borderRadius: 60,
    padding: 20,
    backgroundColor: '#e0e7ff',
  },
  infoSection: {
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    flexShrink: 1,
  },
});
