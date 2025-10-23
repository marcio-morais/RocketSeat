import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSinUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Cadastro realizado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('./sign-in'),
        },
      })
    } catch {
      toast.success('Erro ao salvar seu cadastro')
    }
  }

  return (
    <>
      <div className="w-full p-10">
        <Button variant={'ghost'} asChild className="absolute top-8 right-8">
          <Link to="/sign-in">Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar sua conta
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">Seja um parceiro</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSinUp)}>
          <div className="space-y-2">
            <Label htmlFor="restautantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Responsavel</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone"> telefone</Label>
            <Input id="phone" type="tel" {...register('phone')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Criando...' : 'Criar'}
          </Button>

          <p>
            Ao continuar voce concorda com nossos{' '}
            <a className="underline underline-offset-4" href="">
              termos servicos
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="">
              politicas de privacidade
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
