import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  Close,
  Content,
  Overlay,
  TransactionsType,
  TransactionsTypeButton,
} from './style'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    createTransaction({ description, price, category, type })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>
        <Dialog.Description>
          Preencha os dados abaixo para cadastrar uma nova transação.
        </Dialog.Description>
        <Close>
          <X size={24} aria-label="Fechar" />
        </Close>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descricao"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Valor"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionsType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionsTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    <span>Entrada</span>
                  </TransactionsTypeButton>

                  <TransactionsTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    <span>Saida</span>
                  </TransactionsTypeButton>
                </TransactionsType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
