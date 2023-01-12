import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Switch } from 'native-base'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [full_name, setFullName] = useState('')
  const [avatar_url, setAvatarUrl] = useState('')
  const [is_admin, setISAdmin] = useState(false)
  // const toggleSwitch = () => setISAdmin(is_admin => !is_admin);

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, full_name, avatar_url, is_admin`)
        .eq('id', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setFullName(data.full_name)
        setAvatarUrl(data.avatar_url)
        setAvatarUrl(data.is_admin)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({username, full_name, avatar_url, is_admin})
  {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {
        id: session?.user.id,
        username,
        full_name,
        avatar_url,
        is_admin,
        updated_at: new Date()
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input label='Email' value={session?.user?.email} disabled />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label='Username' value={username || ''} onChangeText={(text) => setUsername(text)} />
      </View>
      <View style={styles.verticallySpaced}>
        <Input label='Name' value={full_name || ''} onChangeText={(text) => setFullName(text)} />
      </View>
      {/*<View style={styles.verticallySpaced}>*/}
      {/*  <Switch label='is_admin' value={is_admin} />*/}
      {/*</View>*/}

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ username, full_name, avatar_url, is_admin  })}
          disabled={loading}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button title='Sign Out' onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch'
  },
  mt20: {
    marginTop: 20
  }
})
