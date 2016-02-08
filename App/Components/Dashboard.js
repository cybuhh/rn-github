import React, {
    Component,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';

import Profile from './Profile';
import Repositories from './Repositories';
import Notes from './Notes';
import api from '../Utils/api';

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

export default class Dashboard extends Component {
    goToProfile(event) {
        this.props.navigator.push({
            title: "Profile",
            component: Profile,
            passProps: {
                userInfo: this.props.userInfo
            }
        });
    }

    goToRepos(event) {
        api.getRepos().then((repos) => {
            this.props.navigator.push({
                title: "Repositories",
                component: Repositories,
                passProps: {
                    userInfo: this.props.userInfo,
                    repos: repos
                }
            });
        });
    }

    goToNotes(event) {
        this.props.navigator.push({
            title: "Notes",
            component: Notes,
            passProps: {
                userInfo: this.props.userInfo
            }
        });    }

    makeBackground(btn) {
        const obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };

        if (btn === 0) {
            obj.backgroundColor = '#48BBEC';
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE';
        } else if (btn === 2) {
            obj.backgroundColor = '#758BF4';
        }

        return obj;
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.userInfo.avatar_url}} style={styles.image} />
                <Text>This is the dashboard</Text>
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}> View Notes</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
