import { View, ScrollView, Text, StyleSheet, Image, Pressable, Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

const Home = () => {
    const handlePressProject1 = () => {
      Linking.openURL('https://www.figma.com/file/gizZ4wzktTh61XhRtFQdf3/KK5-Mobile-Product-Creative?type=design&node-id=0%3A1&mode=design&t=qKIQFWlm0DGEQLCs-1');
    };
    const handlePressProject2 = () => {
      Linking.openURL('https://drive.google.com/drive/folders/1OP7v7cM_JKkXaAvqnV8Kicsyn-0ZZZGm?usp=sharing');
    };
    const Contact = () => {
      Linking.openURL('https://wa.me/62895606464654?text=Im%20interested%20in%20you%20will%20you%20be%20my%20bf?');
    };

  return(
  <ScrollView>
    <View style={styles.container}>
    <Image
    source={require('../assets/snack-icon.png')}
    style={styles.profile} />

    <Text style={styles.title}>Gantar Abimanyu</Text>
    <Text style={styles.paragraph}>
    Saya merupakan siswa SMK Telkom Purwokerto mempunyai ketertarikan di bidang IT terutama pada bagian UI/UX Designer.
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]} onPress={Contact} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%'}}>
      <Text style={styles.title}>My Project</Text>

      <Image
      source={require('../assets/mofu-splash.png')}
      style={styles.project2}
      />
      
      <Text style={styles.projectTitle}>Mofu</Text>
      <Text style={styles.projectCat}>UI/UX Design</Text>
      <Text style={[styles.projectCat,{marginTop: 10}]}>View on:</Text>
      <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject1}> 
        <Image 
        source={require('../assets/icon-figma.png')}
        style={{width: 25, height: 25}}/>
        <Text style={{color: '#ffffff'}}>Figma</Text>
      </Pressable>

      <Text style={{borderColor: 'black'}}></Text>


      <Image
      source={require('../assets/mofu-logo.png')}
      style={styles.project}
      />
      
      <Text style={styles.projectTitle}>Magical Forest</Text>
      <Text style={styles.projectCat}>Photoshop Design</Text>
      <Text style={[styles.projectCat,{marginTop: 10}]}>View on:</Text>
      <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject2}> 
        <Image 
        source={require('../assets/icon-drive.png')}
        style={{width: 25, height: 25}}/>
        <Text style={{color: '#ffffff'}}>Drive</Text>
      </Pressable>
    </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#CCE2E4', 
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: '28%'
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#2F3540',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  project: {
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
    project2: {
    maxWidth: 300,
    maxHeight: 215,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  projectCat: {

  },
  btnProject: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default Home;