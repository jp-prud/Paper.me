import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {
  PreviewPostFormSchemaTypes,
  PreviewPostFormSchema,
} from './previewPostScreenFormSchema';

export function usePreviewPostScreen() {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm<PreviewPostFormSchemaTypes>({
    defaultValues: {
      title: '',
      subtitle: '',
      thumbnail: '',
      description: '',
    },
    resolver: zodResolver(PreviewPostFormSchema),
  });

  const handlePressNextStep = handleSubmit(data => {
    const {title, subtitle, description, thumbnail} = data;

    if (data) {
      navigation.navigate('CreateContentPostScreen', {
        post: {
          title,
          subtitle,
          description,
          thumbnail,
        },
      });
    }
  });

  return {
    handlePressNextStep,
    control,
  };
}
