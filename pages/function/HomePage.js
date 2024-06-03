import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';

function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'SignPage', title: '签到功能'},
          {key: 'GPTPage', title: 'GPT功能'},
          {key: 'AmapPage', title: 'Amap功能'},
          {key: 'HostPage', title: 'Host'},
        ]}
        renderItem={({item}) =>
          <View>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.key)}
            />
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default HomePage;
