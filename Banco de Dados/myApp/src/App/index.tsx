import {View, Button, Alert} from 'react-native';
import Input from '../componentes/input';
import { useState } from 'react';

import { useProductDatabase } from '../database/useProductDatabase';

export default function app() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [products, setProducts] = useState([]); 

    const productDatabase = useProductDatabase(); 

    async function create(){
        try{
            if (isNaN(Number(quantity))) { // Verifica se a quantidade é um número válido.
                return Alert.alert("Quantidade inválida", 'A quantidade precisa ser um número!'); 
            }
            
        const response = await productDatabase.create({quantity: Number(quantity), nome: name});

        Alert.alert("Produto cadastrado com o ID: " + response.insertedRowId);
        } catch (error) {
            console.log(error); }
       
    }

    return(
        <View style={{flex:1, justifyContent:'center', padding: 32, gap: 16, backgroundColor:"#3ceb10"}}>

            <Input placeholder="Nome" value={name} onChangeText={setName} />
            <Input placeholder="Quantidade" value={quantity} onChangeText={setQuantity} />
            
            <Button title="Salvar" onPress={ create } />

        </View>
    );
}