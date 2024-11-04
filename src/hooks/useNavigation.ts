import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../interfaces/RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

export const useNavigationApp = () => {
  const navigationApp =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  return {
    navigationApp,
  };
};
