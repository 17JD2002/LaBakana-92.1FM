import React from "react";
import { Image, SafeAreaView, Pressable, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  const [sound, setSound] = React.useState();
  const [play, setPlay] = React.useState(false);
  async function playSound() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: false,
    });
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      ({ uri: 'http://109.169.23.17:8001/stream' })
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
    setPlay(true);
  }
  function pauseSound() {
    setSound();
    setPlay(false)
  }
  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  return (
    <SafeAreaView style={{ justifyContent: 'center' }}>
      <Image
        resizeMode="contain"
        style={{ width: 280, height: 180, marginTop: "24%", alignSelf: 'center' }}
        source = {require('../assets/fondo.png')}
      />
      <View style={{ marginTop: 300 }}>
        <Text style={{ color: "#80dd46", textAlign: "center", fontSize: 40 }}>{play ? "¡PAUSAR!" : "¡DALE PLAY!"}</Text>
        <Pressable style={{ marginTop: 10, width: 100, height: 100, backgroundColor: "#444444", justifyContent: "center", alignSelf: 'center', borderRadius: 50 }}
          onPress={() =>
            play ? pauseSound() : playSound()
          }>
          {play ? <AntDesign name="pause" size={50} color="white" style={{ alignSelf: "center" }} />
            : <Ionicons name="play-skip-forward-outline" size={50} color="white" style={{ alignSelf: "center" }} />}
        </Pressable>
      </View>

    </SafeAreaView>
  );
}
export default HomeScreen;
