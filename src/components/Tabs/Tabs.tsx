import {ScrollView} from 'react-native';

import {Box} from '@components';

import {Bullet} from './components/Bullet';

interface TabsProps {
  list: string[];
}

export function Tabs({list}: TabsProps) {
  return (
    <Box>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          gap: 16,
        }}>
        {list.map((item, index) => (
          <Bullet content={item} key={item} isActive={index === 0} />
        ))}
      </ScrollView>
    </Box>
  );
}
