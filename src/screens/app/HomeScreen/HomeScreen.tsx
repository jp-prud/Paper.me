import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostProps} from '@domain';

import {Box, PostItem, RenderIfElse, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {HomeHeader, HomeErrorPostList, HomeEmptyPostList} from './components';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const {postList, isLoading, error, refetch} = useHomeScreen();

  function renderPost({item}: ListRenderItemInfo<PostProps>) {
    return <PostItem post={item} />;
  }

  function renderSeparator() {
    return <Box height={1} backgroundColor="gray4" mb="s24" mt="s24" />;
  }

  function renderPostList() {
    return (
      <FlatList
        data={postList}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={<HomeEmptyPostList />}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  }

  return (
    <Screen isLoading={isLoading}>
      <RenderIfElse
        condition={error}
        renderIf={<HomeErrorPostList refetch={refetch} />}
        renderElse={renderPostList()}
      />
    </Screen>
  );
}
