import {z} from 'zod';

export const NewCommentFormSchema = z.object({
  content: z
    .string()
    .min(8, {
      message: 'Seu comentário deve ter no mínimo 8 caracteres',
    })
    .max(200, {
      message: 'Seu comentário não pode ter mais de 200 caracteres.',
    }),
});

export type NewCommentFormSchemaTypes = z.infer<typeof NewCommentFormSchema>;
