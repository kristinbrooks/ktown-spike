import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/Homescreen'
import { UserDetailScreen } from '../../features/user/UserDetail'
import Auth from '../../features/login/Auth'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen
        name='auth'
        component={Auth}
        options={{
          title: 'Auth'
        }}
      />
      <Stack.Screen
        name='userDetail'
        component={UserDetailScreen}
        options={{
          title: 'User'
        }}
      />
    </Stack.Navigator>
  )
}
