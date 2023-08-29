import {z} from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email('E-mail é inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type SignInFormSchemaTypes = z.infer<typeof SignInFormSchema>;
