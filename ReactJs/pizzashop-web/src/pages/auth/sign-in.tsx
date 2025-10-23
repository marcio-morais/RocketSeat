import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  })

  const { mutateAsync: autenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSinIn(data: SignInForm) {
    console.log(data)
    await autenticate({ email: data.email })

    toast.success('Link enviado para o seu e-mail!')
  }

  return (
    <>
      <div className="w-full p-10">
        <Button variant={'ghost'} asChild className="absolute top-8 right-8">
          <Link to="/sign-up">Cadastre-se</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas no painel do parceiro
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSinIn)}>
          <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Acessando...' : 'Acessar painel'}
          </Button>
        </form>
      </div>
    </>
  )
}
