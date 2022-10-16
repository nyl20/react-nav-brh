import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  button: {
    // background: '#ff4742',
    background: '#DBA181',
    // backgroundColor: '#F03C03',
    // backgroundColor: '#DBA181',
    backgroundColor: '#c5d6e3',
    // borderRadius: 999,
    color: 'black',
    fontSize: 24,
    lineHeight: 30,
    marginTop: 24,
    padding: 30,
    textAlign: 'left',
    borderRadius: 10,
    width: 350
  },
  foodHeader: {
    fontSize: 50,
    padding: 30,
    color: '#F03C03'
  },
  listText: {
    fontSize: 20,
    padding: 25,
    textAlign: 'left'
  },
  addButton: {
    // backgroundColor: '#F7F4FF',
    backgroundColor: '#e3dac9',
    fontSize: 20,
    padding: 20,
    color: 'white',
    width: 450
  },
  listTitle: {
    fontSize: 35,
    color: '#F03C03'
  },
  container: {
    flex: 1,
  },
  timelineTitle: {
    padding: 25,
    fontSize: 30,
    textAlign: 'center',

  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    marginTop: 24
  },
  promptText: {
    fontSize: 20,
    padding: 15,
    paddingBottom: 0,
    textAlign: 'left'
  }
})