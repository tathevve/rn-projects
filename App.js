/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';


const App = () => {

  const [items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
  ])

  const [datas, setDatas] = useState([
    {
      title: 'alo 1',
      data: ['item 1-1', 'item 1-2', 'item 1-3']
    },
  ])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    const arrlength = datas.length+1;
    console.log(arrlength,'a')

    setDatas([...datas, {
      title: 'alo ' + arrlength,
      data: ['item ' + arrlength + '-1', 'item ' + arrlength+'-2']
    }]);
    //datas.push({ title: 'title' + '' })
    setRefreshing(false)
  }


  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}

      // sections={datas}
      // renderItem={({ item }) => (
      //   <Text style={styles.text}>{item}</Text>
      // )}
      sections={datas}
      renderSectionHeader={({ section }) => (
        <View style={styles.item} >
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      renderItem={({ item }) =>
        //<View style={styles.item} >
          <Text style={styles.text}>{item}</Text>
        //</View>
      }
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />}
    />
    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={ ({item}) =>
    //     <View style={styles.item} >
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   }
    //     refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors ={['#ff00ff']}
    //     />}
    // />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors ={['#ff00ff']}
    //     />}
    // >
    //   {
    //     items.map((object) => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  text: {
    fontSize: 40,
    margin: 10
  },
});

export default App;
