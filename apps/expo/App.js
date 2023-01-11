// import { NativeNavigation } from 'app/navigation/native'
// import { Provider } from 'app/provider'
//
// export default function App() {
//   return (
//     <Provider>
//       <NativeNavigation />
//     </Provider>
//   )
// }

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from 'app/lib/supabase'
import Auth from 'app/features/login/Auth'
import Account from 'app/features/user/Account'
import { View } from 'react-native'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}
