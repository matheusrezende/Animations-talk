import {createStackNavigator} from 'react-navigation'
import HomeComponent from '../Components/HomeComponent'
import AnimationsAPI from '../Components/AnimationsAPI'
import AnimatedBar from '../Components/AnimationsAPI/AnimatedBar';
import Spinning from '../Components/AnimationsAPI/Spinning';
import PopMotion from '../Components/PopMotion'
import AnimatedBarPop from '../Components/PopMotion/AnimatedBar'
import Fade from '../Components/PopMotion/Fade';
import Lottie from '../Components/Lottie';
import Loading from '../Components/Lottie/Loading';
import Location from '../Components/Lottie/Location';
import Typing from '../Components/Lottie/Typing';
import Motorcycle from '../Components/Lottie/Motorcycle';

export default createStackNavigator({
  Home: {
    screen: HomeComponent,
  },
  AnimationsAPI: {
    screen: AnimationsAPI,
    navigationOptions: {
      title: 'Animations API',
    },
  },
  AnimatedBar: {
    screen: AnimatedBar,
    navigationOptions: {
      title: 'Animated Bars',
    },
  },
  Spinning: {
    screen: Spinning,
    navigationOptions: {
      title: 'Spinning',
    },
  },
  PopMotion: {
    screen: PopMotion,
    navigationOptions: {
      title: 'Popmotion',
    },
  },

  AnimatedBarPop: {
    screen: AnimatedBarPop,
    navigationOptions: {
      title: 'Animated Bars',
    },
  },
  Fade: {
    screen: Fade,
    navigationOptions: {
      title: 'Fade Square',
    },
  },
  Lottie: {
    screen: Lottie,
    navigationOptions: {
      title: 'Lottie',
    },
  },
  Loading: {
    screen: Loading,
    navigationOptions: {
      title: 'Loading',
    },
  },
  Location: {
    screen: Location,
    navigationOptions: {
      title: 'Location',
    },
  },
  Typing: {
    screen: Typing,
    navigationOptions: {
      title: 'Typing',
    },
  },
  Motorcycle: {
    screen: Motorcycle,
    navigationOptions: {
      title: 'Motorcycle',
    },
  },
}, {
  navigationOptions: {
    title: 'React Native Animations',
    initialScreen: 'Home',
  },
})
