import {useGetUserData} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Avatar, Box, Icon, Text, TouchableOpacityBox} from '@components';

export function HomeHeader() {
  const {userData} = useGetUserData();

  const {navigate} = useNavigation();

  function handleClickNavigateToProfileScreen() {
    navigate('ProfileScreen');
  }

  function handleClickNavigateToNotificationScreen() {
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
      backgroundColor="background"
      testID="home-header">
      <TouchableOpacityBox
        onPress={handleClickNavigateToProfileScreen}
        testID="avatar-header-container">
        <Avatar user={userData} />
      </TouchableOpacityBox>

      <Text preset="paragraphLarge" bold>
        Início
      </Text>

      <TouchableOpacityBox
        width={32}
        height={32}
        justifyContent="center"
        alignItems="center"
        onPress={handleClickNavigateToNotificationScreen}
        testID="search-header-container">
        <Icon name="search" />
      </TouchableOpacityBox>
    </Box>
  );
}
