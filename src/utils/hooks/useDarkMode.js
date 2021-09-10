import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

export default function useDarkMode() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (typeof colorScheme !== 'string') {
      return false;
    }
    return colorScheme === 'dark';
  }, [colorScheme]);
}
