import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'
import { styled } from 'nativewind'
import { SplashScreen, Stack } from 'expo-router'
import * as SecureStore from 'expo-secure-store'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import Stripes from '../src/assets/stripes.svg'
import blurBg from '../src/assets/luz.png'

const SytledStripes = styled(Stripes)

export default function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const token = SecureStore.getItemAsync('token')
    setIsAuthenticated(!!token)
  }, [])

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <SytledStripes className="absolute left-2" />
      <StatusBar translucent style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen name="index" redirect={isAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  )
}
