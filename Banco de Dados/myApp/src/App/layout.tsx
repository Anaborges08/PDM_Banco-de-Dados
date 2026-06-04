import { initializeDatabase } from '../database/Initializedatabase';

import { Slot, Stack} from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

export default function layout (){
    return (
        <SQLiteProvider databaseName='mydatabase.db' onInit={initializeDatabase}>
             <Slot />
        </SQLiteProvider>

    ); 
        
       

    
}