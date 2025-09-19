import { Image } from 'expo-image';
import { ImageBackground, Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('@/assets/images/pelé.jpg')} >
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      style={{ width: 200, height: 200 }}
      headerImage={
        <Image
          source={require('@/assets/images/pelé.jpg')}
          style={styles.reactLogo}
          />
        }>
      <ThemedView style={styles.titleContainer}>

        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
    
        <ThemedText>
        
        {' '}
       
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
              />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
                />
            </Link.Menu>
          </Link.Menu>
        </Link>

      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
       
       
     
      </ThemedView>
    </ParallaxScrollView>
                </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 374,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
