import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';

function HostPage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{key: 'null', title: '暂无功能'}]}
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
export default HostPage;
