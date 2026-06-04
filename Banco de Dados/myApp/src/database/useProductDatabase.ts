import { useSQLiteContext } from "expo-sqlite";

export type ProductDatabase ={
    id: number;
    nome: string;
    quantity: number;
}
export function useProductDatabase() {
    const database = useSQLiteContext();

    async function create (data: Omit<ProductDatabase, "id">){
        const statement = await database.prepareAsync(
            "INSERT INTO products (nome, quantity) VALUES ($nome, $quantity)",
        );

        try{
            const rusult = await statement.executeAsync({
                $nome: data.nome,
                $quantity: data.quantity,
            })

        const insertedRowId = rusult.lastInsertRowId.toLocaleString();

        return {insertedRowId};
            
        } catch (error){
            throw error;
        }
    }

    return { create }
}