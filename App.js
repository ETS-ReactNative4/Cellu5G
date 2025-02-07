import React from 'react'
import Home from './components/Home'
import ResultsByLocation from './components/ResultsByLocation'
import ResultsByAddress from './components/ResultsByAddress'
import {CityInput} from './components/CityInput'
import {StreetInput} from './components/StreetInput'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MapView from './components/MapView'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render () {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Location' component={ResultsByLocation} />
            <Stack.Screen name='MapView' component={MapView} />
            <Stack.Screen name='CityInput' component={CityInput} />
            <Stack.Screen name='StreetInput' component={StreetInput} />
            <Stack.Screen
              name='ResultsByAddress'
              component={ResultsByAddress}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

const Stack = createStackNavigator()
