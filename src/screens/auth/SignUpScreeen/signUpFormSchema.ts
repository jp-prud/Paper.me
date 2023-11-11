import {z} from 'zod';

export const SignUpFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Nome de usuário deve ter no mínimo 3 caracteres'),
  fullName: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('E-mail é inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type SignUpFormSchemaTypes = z.infer<typeof SignUpFormSchema>;
