import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostProps} from '@types';

import {Avatar, Box, PostItem, Screen, Text, TitleBar} from '@components';
import {AppScreenProps} from '@routes';

import {useProfileScreen} from './useProfileScreen';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const {userData, isLoading, recentPostList} = useProfileScreen();

  if (!userData) {
    return <></>;
  }

  const {avatar, username, fullName} = userData;

  function renderPost({item}: ListRenderItemInfo<PostProps>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen title="Perfil" isLoading={isLoading}>
      <Box flexDirection="row" alignItems="center" gap="s14" mb="s14">
        <Avatar
          size={72}
          user={{
            avatar,
            name: username,
          }}
        />

        <Box gap="s4">
          <Text bold>{fullName}</Text>
          <Text preset="paragraphSmall" color="neutral600">
            {username}
          </Text>
        </Box>
      </Box>

      <Text preset="paragraphSmall" color="neutral600">
        Design, Productivity, and Creaion. Learn everything you need o improve
        you design skills.
      </Text>

      <Box mt="s24">
        <TitleBar title="Recent Stories" />

        <FlatList
          data={recentPostList}
          renderItem={renderPost}
          keyExtractor={item => item.id}
        />
      </Box>
    </Screen>
  );
}
