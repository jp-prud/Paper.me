import {
  Avatar,
  Box,
  FormTextInput,
  RenderIfElse,
  TouchableOpacityBox,
} from '@components';

import {useFixedCommentSection} from './useFixedCommentSection';

interface FixedCommentSectionProps {
  postId: string;
}

export function FixedCommentSection({postId}: FixedCommentSectionProps) {
  const {
    control,
    dirtyFields,
    handleSubmit,
    handleClickCreateComment,
    userData,
  } = useFixedCommentSection(postId);

  function renderRightComponent() {
    return (
      <RenderIfElse
        condition={!!dirtyFields.content}
        renderIf={
          <TouchableOpacityBox
            width={32}
            height={32}
            borderRadius="s16"
            backgroundColor="primary"
            onPress={handleSubmit(handleClickCreateComment)}
          />
        }
        renderElse={<Avatar user={userData} />}
      />
    );
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="background"
      borderTopWidth={1}
      borderTopColor="gray4">
      <Box flex={1}>
        <FormTextInput
          control={control}
          name="content"
          boxContainerStyles={{borderWidth: 0}}
          errorMessageContainerStyles={{paddingHorizontal: 16}}
          placeholder="Escreva um comentário..."
          RightComponent={renderRightComponent()}
        />
      </Box>
    </Box>
  );
}
