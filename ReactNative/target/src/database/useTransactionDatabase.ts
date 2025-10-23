import { useSQLiteContext } from 'expo-sqlite';
import { TransactionTypes } from '../utils/TransactionTypes';

export type TransactionCreate = {
  target_id: number;
  amount: number;
  name: string;
  observations?: string;
  type: TransactionTypes;
};

export type TransactionResponse = TransactionCreate & {
  id: string;
  created_at: Date;
  updated_at: Date;
};

export type TransactionUpdate = TransactionCreate & {
  id: string;
};

export function useTransactionDatabase() {
  const database = useSQLiteContext();

  async function createTransaction(data: TransactionCreate) {
    const statement = await database.prepareAsync(`
      INSERT INTO transactions (
      target_id,
      name,
      amount,
      observations,
      type
    ) VALUES
    (
      $target_id,
      $name,
      $amount,  
      $observations,
      $type
    );`);

    await statement.executeAsync({
      $amount: data.amount,
      $target_id: data.target_id,
      $observations: data.observations ?? null,
      $type: data.type,
      $name: data.name,
    });

    await statement.finalizeAsync();
  }

  async function listBySavedValue(target_id: number) {
    return database.getAllAsync<TransactionResponse>(
      `
      SELECT 
        transactions.id,
        transactions.name,
        transactions.amount,
        transactions.observations,
        transactions.type,
        transactions.created_at,
        transactions.updated_at
      FROM transactions
      WHERE transactions.target_id = $target_id
      ORDER BY transactions.created_at DESC
    `,
      {
        $target_id: target_id,
      },
    );
  }

  async function getTransactionById(id: number) {
    return database.getFirstAsync<TransactionResponse>(
      `
      SELECT 
        transactions.id,
        transactions.name,
        transactions.observations,
        transactions.amount,
        transactions.created_at,
        transactions.updated_at
      FROM transactions
      WHERE transactions.id = $id
    `,
      { $id: id },
    );
  }

  async function deleteTransaction(id: string) {
    const statement = await database.prepareAsync(`
      DELETE FROM transactions WHERE id = $id;
    `);

    await statement.executeAsync({ $id: id });
    await statement.finalizeAsync();
  }

  async function updateTransaction(data: TransactionUpdate) {
    const statement = await database.prepareAsync(`
      UPDATE transactions
      SET
        target_id = $target_id,
        name = $name, 
        amount = $amount,
        observations = $observations,
        type = $type,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $id;
    `);

    await statement.executeAsync({
      $id: data.id,
      $target_id: data.target_id,
      $name: data.name,
      $amount: data.amount,
      $observations: data.observations ?? null,
      $type: data.type,
    });

    await statement.finalizeAsync();
  }

  async function getAllTransactions() {
    const result = await database.getAllAsync<TransactionResponse>(`
      SELECT
        transactions.id,
        transactions.name,
        transactions.amount,
        transactions.observations,
        transactions.type,
        transactions.created_at,
        transactions.updated_at
      FROM transactions
    `);  

    console.log('getAllTransactions result:', result);

    return result;
  }

  return {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    listBySavedValue,
    getTransactionById,
    getAllTransactions,
  };
}
