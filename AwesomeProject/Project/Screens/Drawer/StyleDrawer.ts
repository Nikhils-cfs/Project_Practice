import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1e3a8a',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  drawerList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});