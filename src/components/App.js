/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  scrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GridView from 'react-native-draggable-gridview';
import Draggable from './DraggableGridView';
import withEssentials from './withEssentials';

const App = ({isPortrait}) => {
  const [data, setData] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ]);

  const [width, setWidth] = useState(2);

  useEffect(() => {
    console.log(Dimensions.get('window').width);
  }, [isPortrait]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Draggable
          data={data}
          numColumns={isPortrait ? 2 : 4}
          width={isPortrait ? 414 : 896}
          onDelete={(item) => {
            setData(data.filter((v) => v !== item));
          }}
          renderItem={(item) => (
            <View
              style={{
                flex: 1,
                margin: 1,
                justifyContent: 'center',
                backgroundColor: 'gray',
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text style={{textAlign: 'center'}}>{item}</Text>
            </View>
          )}
          onReleaseCell={(items) => setData(items)}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>

          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </Draggable>
      </SafeAreaView>
    </>
  );
};

const DeleteComponent = ({}) => {
  return (
    <View style={styles.deleteContainer}>
      <Text> Delete </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    position: 'absolute',
    height: 20,
    width: 100,
    left: 100 / 2,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default withEssentials(App);
