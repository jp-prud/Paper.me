import {
  FlatList,
  ListRenderItemInfo,
  ViewStyle,
  RefreshControl,
} from 'react-native';

import {PostProps} from '@types';

import {Box, PostItem, RenderIfElse, Screen, Tabs, TitleBar} from '@components';
import {AppScreenProps} from '@routes';

import {
  HomeHeader,
  HomeErrorPostList,
  HomeEmptyPostList,
  AddPostFixedButton,
} from './components';
import {HomeHero} from './components/HomeHero';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const {postList, isLoading, error, refetch, homeContentRef} = useHomeScreen();

  function renderPost({item}: ListRenderItemInfo<PostProps>) {
    return <PostItem post={item} />;
  }

  function renderSeparator() {
    return <Box height={1} backgroundColor="gray4" mb="s24" mt="s24" />;
  }

  function renderHomeContent() {
    return (
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        data={postList}
        ref={homeContentRef}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeroContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<HomeEmptyPostList />}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  }

  function renderHeroContent() {
    return (
      <Box gap="s28" mb="s28" mt="s16">
        <HomeHero />

        <Box gap="s12">
          <TitleBar title="Nossas indicações" linkText="Ver mais" />

          <Tabs
            list={[
              'Todos',
              'Centros Acadêmicos',
              'Negócios',
              'Tecnologia',
              'Ciência',
            ]}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Screen
      isLoading={isLoading}
      customHeader={<HomeHeader />}
      FooterComponent={!isLoading && !error && <AddPostFixedButton />}
      footerContainerStyle={$homeScreenStyleContainer}>
      <RenderIfElse
        condition={error}
        renderIf={<HomeErrorPostList refetch={refetch} />}
        renderElse={renderHomeContent()}
      />
    </Screen>
  );
}

const $homeScreenStyleContainer: ViewStyle = {
  paddingBottom: 0,
};
