import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import RNDoraemonSdk from 'react-native-doraemon-sdk';
function SignPage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '1',title: '登录'},
          {key: '2', title: '签到'},
          {key: '3',title: '所有课程'},
          {key: '4',title: '课程所有签到'},
          {key: '5',title: '预签到'},
        ]}
        renderItem={({item}) =>
          <View>
            <Button title={item.title} onPress={() => dofuntion(item.key,navigation)} />
          </View>
        }
      />
    </View>
  );
};
function dofuntion(key,navigation){
    switch (key) {
      case '1':
        navigation.navigate('LoginPage')
    //   RNDoraemonSdk.SignFuntion.login(params,developerInfo).then(result =>{
    //     console.log(result)
    //   }
    // )
        break;
      case '2':RNDoraemonSdk.SignFuntion.signWithCode(params).then(result =>{
        console.log(result)
      })
        break;
        case '3':
          RNDoraemonSdk.SignFuntion.loadAllCourses(params).then(result =>{
          console.log(result)
        })
        break;
        case '4':
          RNDoraemonSdk.SignFuntion.queryActiveTaskList(params).then(result =>{
            console.log(result)
          })
        break;
        case '5':
          RNDoraemonSdk.SignFuntion.preSign(params).then(result =>{
            console.log(result)
          })
        break;
      default:
        break;
    }
}
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default SignPage;
