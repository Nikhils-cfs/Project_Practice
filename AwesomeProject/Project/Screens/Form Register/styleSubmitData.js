import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {marginTop: 30},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 0.5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
