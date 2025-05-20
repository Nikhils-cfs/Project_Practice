import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  innerWrap: {
    backgroundColor: 'rgba(210, 180, 180, 0.03)',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#123',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
    // backgroundColor:'blue'
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPassword: {
    color: '#dbeafe',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#e0e7ff',
    fontSize: 14,
  },
  registerLink: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
  },
  passwordWrapper: {
 justifyContent:'space-between'
  
},
eyeIcon: {
  position:'absolute',
  right: 22,
  paddingVertical:10,

},
});
