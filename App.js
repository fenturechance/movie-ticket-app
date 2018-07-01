import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene, Tabs, Drawer, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/home/home';
import DrawerContent from './components/home/drawerContent';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

const bookmarkIcon = () => ( <Icon name="bookmark" /> ) ;
const DrawerIcon = () => ( <Icon name="bars" size={ 20 }/> );
const SearchIcon = () => (<Icon name="search" size={20} />);


export default class App extends React.Component {

  state = {
    tabs : [
      { key : 'myCollection', title : '我的片單' , icon : bookmarkIcon ,  component : Home } ,
      { key : 'search', title : '場次查詢' , icon : bookmarkIcon ,  component : Home } ,
      { key : 'buyTicket', title : '立即購票' , icon : bookmarkIcon ,  component : Home } ,
      { key : 'myTickets', title : '我的票夾' , icon : bookmarkIcon ,  component : Home } ,
      { key : 'activity', title : '優惠活動' , icon : bookmarkIcon ,  component : Home } ,
    ]
  }
  

  render() {  
    return (
      <View style={{ flex : 1 }}>
        <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
          <Stack key="root" >
            <Tabs tabBarPosition="bottom" hideNavBar swipeEnabled >
              { this.state.tabs.map( tab => (
                <Drawer
                    key={ `drawer_${tab.key}` }
                    contentComponent={DrawerContent}
                    drawerIcon={DrawerIcon}
                    drawerWidth={260}
                    rightTitle={SearchIcon}
                    onRight={ () => {} }
                  >
                  <Stack key={ tab.key } title={ tab.title } tabBarLabel={ tab.title } icon={ tab.icon }>
                    <Scene key="home" component={ tab.component }></Scene>
                  </Stack>
                </Drawer>
                )
              ) }
            </Tabs>
          </Stack>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
