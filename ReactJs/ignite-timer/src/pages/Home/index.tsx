import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { CountDown } from './components/CountDown'
import { NewCycloForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

export function Home() {
  const { activeCycle, newCycle, iterruptCurrentCyclo } =
    useContext(CyclesContext)

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'Tempo nao pode ser menor que 5')
      .max(60, 'tempo maximo 60'),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  const newCycloForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycloForm

  function handleCreateNewCyclo(data: NewCycleFormData) {
    console.log(data)
    newCycle(data)
    reset()
  }

  const task = watch('task')

  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCyclo)}>
        <FormProvider {...newCycloForm}>
          <NewCycloForm />
        </FormProvider>
        <CountDown />
        {activeCycle ? (
          <StopCountdownButton onClick={iterruptCurrentCyclo} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Comecar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
