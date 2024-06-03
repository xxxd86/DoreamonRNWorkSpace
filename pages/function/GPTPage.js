import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';

function GPTPage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'NormalChatPage', title: '普通对话功能'},
          {key: 'VoicePage', title: '语音功能'},
          {key: 'PhonePage', title: '电话功能'},
          {key: 'DocumentqueryPage', title: '文档查询功能'},
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
export default GPTPage;
