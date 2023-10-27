import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {PostProps} from '@types';
import {FixedButton} from 'src/components/FixedButton/FixedButton';

import {Box, PostItem, RenderIfElse, Screen, Tabs, TitleBar} from '@components';
import {AppScreenProps} from '@routes';

import {HomeHeader, HomeErrorPostList, HomeEmptyPostList} from './components';
import {HomeHero} from './components/HomeHero';
import {useHomeScreen} from './useHomeScreen';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  const {postList, isLoading, error, refetch, homeContentRef} = useHomeScreen();
  const {navigate} = useNavigation();

  function renderPost({item}: ListRenderItemInfo<PostProps>) {
    return <PostItem post={item} />;
  }

  function renderSeparator() {
    return <Box height={1} backgroundColor="gray4" mb="s24" mt="s24" />;
  }

  function renderHomeContent() {
    return (
      <FlatList
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
      FooterComponent={
        !isLoading &&
        !error && (
          <FixedButton
            icon="pencil"
            onPress={() => navigate('PreviewPostScreen')}
          />
        )
      }
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
