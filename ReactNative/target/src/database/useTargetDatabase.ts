import { useSQLiteContext } from 'expo-sqlite';

export type TargetCreate = {
  name: string;
  amount: number;
};

export type TargetResponse = {
  id: string;
  name: string;
  amount: number;
  current: number;
  percentage: number;
  created_at: Date;
  updated_at: Date;
};

export type TargetUpdate = TargetCreate & {
  id: number;
};

export function useTargetDatabase() {
  const database = useSQLiteContext();

  async function createTarget(data: TargetCreate) {
    const statement = await database.prepareAsync(
      'INSERT INTO targets (name, amount) VALUES ($name, $amount);',
    );

    await statement.executeAsync({ $name: data.name, $amount: data.amount });
    await statement.finalizeAsync();
  }

  async function listBySavedValue() {
    return database.getAllAsync<TargetResponse>(`
      SELECT 
        targets.id,
        targets.name,
        targets.amount,
        IFNULL(SUM(transactions.amount), 0) AS current,
        IFNULL(SUM(transactions.amount) / targets.amount * 100, 0) AS percentage,
        targets.created_at,
        targets.updated_at
      FROM targets
      LEFT JOIN transactions ON transactions.target_id = targets.id      
      GROUP BY targets.id
    `);
  }

  async function getTargetById(id: number) {
    return database.getFirstAsync<TargetResponse>(
      `
      SELECT 
        targets.id,
        targets.name,
        targets.amount,
        IFNULL(SUM(transactions.amount), 0) AS current,
        IFNULL(SUM(transactions.amount) / targets.amount * 100, 0) AS percentage,
        targets.created_at,
        targets.updated_at
      FROM targets
      LEFT JOIN transactions ON transactions.target_id = targets.id
      WHERE targets.id = $id
      GROUP BY targets.id
    `,
      { $id: id },
    );
  }

  async function updateTarget(data: TargetUpdate) {
    const statement = await database.prepareAsync(`
      UPDATE targets SET
        name = $name, 
        amount = $amount, 
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $id;
    `);

    await statement.executeAsync({
      $id: data.id,
      $name: data.name,
      $amount: data.amount,
    });
    await statement.finalizeAsync();
  }

  async function deleteTarget(id: string) {
    const statement = await database.prepareAsync(`
      DELETE FROM targets WHERE id = $id;
    `);

    await statement.executeAsync({ $id: id });
    await statement.finalizeAsync();
  }

  

  return {
    createTarget,
    updateTarget,
    deleteTarget,
    listBySavedValue,
    getTargetById,
  };
}
