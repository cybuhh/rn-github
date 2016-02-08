/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

class AwesomeProject extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
                title: "Github Notetaker",
                component: Main
      }}
        />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
