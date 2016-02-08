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
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5,
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5,
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default class Repositories extends Component {

    getRowTitle(item) {
        item = (item === 'public_repos') ? item.replace('_', ' ') : item;
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
    }

    render() {
        const userInfo = this.props.repos;
        const topicArr = ['company', 'location', 'followers', 'email', 'bio', 'public_repos'];

        const list = this.props.repos.map((item, idx) => {
            if(!userInfo[item]) {
                return <View key={idx} />
            } else {
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
