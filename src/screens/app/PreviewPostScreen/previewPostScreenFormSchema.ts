import {z} from 'zod';

export const PreviewPostFormSchema = z.object({
  title: z
    .string()
    .min(10, 'Título deve ter no mínimo 10 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres')
    .nonempty('Título é obrigatório'),
  subtitle: z
    .string()
    .min(10, 'Subtítulo deve ter no mínimo 10 caracteres')
    .max(100, 'Subtítulo deve ter no máximo 100 caracteres')
    .nonempty('Subtítulo é obrigatório'),
  thumbnail: z.string().nonempty('Thumbnail é obrigatório'),
  description: z
    .string()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .nonempty('Descrição é obrigatório'),
});

export type PreviewPostFormSchemaTypes = z.infer<typeof PreviewPostFormSchema>;
