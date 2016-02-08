import React, {
    Component,
    Text,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

import Badge from './Badge';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

export default class Notes extends Component {

    getRowTitle(item) {
        item = (item === 'public_repos') ? item.replace('_', ' ') : item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

    render() {
        const userInfo = this.props.userInfo;
        const topicArr = ['company', 'location', 'followers', 'email', 'bio', 'public_repos'];

        const list = topicArr.map((item, idx) => {
            if(!userInfo[item]) {
                return <View key={idx} />
            } else {
                console.log(item);
                return (
                    <View key={idx}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.rowTitle}> {this.getRowTitle(item)}</Text>
                            <Text style={styles.rowContent}> {userInfo[item]}</Text>
                        </View>
                    </View>
                )
            }
        });

        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={this.props.userInfo} />
                {list}
            </ScrollView>
        )
    }
}
