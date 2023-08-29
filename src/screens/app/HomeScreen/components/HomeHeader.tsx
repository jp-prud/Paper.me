import {useGetUserData} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Avatar, Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HomeHeader() {
  const {userData} = useGetUserData();

  const {navigate} = useNavigation();

  function handleClickNavigateToProfileScreen() {
    navigate('ProfileScreen');
  }

  function handleClickNavigateToSearchScreen() {
    navigate('SearchScreen');
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      pb="s12"
      borderBottomColor="gray4"
      borderBottomWidth={1}
      mb="s24"
      backgroundColor="background">
      <TouchableOpacityBox onPress={handleClickNavigateToProfileScreen}>
        <Avatar user={userData} />
      </TouchableOpacityBox>

      <Text preset="paragraphLarge" bold>
        Inbox
      </Text>

      <TouchableOpacityBox
        width={32}
        height={32}
        justifyContent="center"
        alignItems="center"
        onPress={handleClickNavigateToSearchScreen}>
        <Icon name="search" />
      </TouchableOpacityBox>
    </Box>
  );
}
