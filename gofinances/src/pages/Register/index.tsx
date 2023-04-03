import React, {useState} from "react";
import {Keyboard, Modal , TouchableWithoutFeedback, Alert}  from 'react-native';
import { Container, Header, Title, Form, Fields, TransactionsTypes } from "./styles";
import { Input } from "../../components/Forms/input";
import { InputForm } from "../../components/Forms/InputForm";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton} from "../../components/Forms/CategorySelectButton";

import * as Yup from 'yup'; 
import { yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { CategorySelect } from "../CategorySelect";

interface FormData{
    [name: string]: string;
    //amount: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    amount: Yup.number()
      .typeError("Informe um valor númerico")
      .positive("O valor não pode ser negativo")
      .required("O valor é obrigatório"),
  });
  
export function Register() {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        
    });

    const{
        control,
        handleSubmit,
        formState: {errors}
    } = useForm(
        {
            resolver:yupResolver(schema)
        }
    );

    const [transactionType, setTransactionType] = useState('');
    const [categorymodalOpen, setCategoryModalOpen] = useState(false);


    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleRegister(form: FormData) {

        if(!transactionType){ //função de alerta pra campo vazio
            return Alert.alert('Selecione o tipo da transação ');
        }

        if(category.key ==='category'){ 
            return Alert.alert('Selecione a Categoria');
        }

 const data = {
    name: form.name,
    amount: form.amount,
    
    transactionType,
    category: category.key,

 }

console.log(data);
    }
 

    return ( //TouchableWithoutFeedback função pra quando clicar fora do form o teclado fechar
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm
                        name="name"
                        control={control}
                        placeholder="Nome"
                        autoCapitalize="words" //Deixa a primeira palavra do form maiúscula
                        autoCorrect={false}  //retirar corrigir form automatico
                        error={errors.name && errors.name.message as string}
                        
                    />

                    <InputForm
                     name="amount"
                     control={control}
                        placeholder="Preço"
                        keyboardType="numeric" //aceitar apenas número no form
                        error={errors.amount && errors.amount.message as string}
                        
                        
                    />

                    <TransactionsTypes>
                        <TransactionTypeButton
                            type='up'
                            title="Income"
                            onPress={() => handleTransactionsTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />

                        <TransactionTypeButton
                            type='down'
                            title="Outcome"
                            onPress={() => handleTransactionsTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />

                    </TransactionsTypes>
                    <CategorySelectButton
                     title={category.name}
                     onPress={handleOpenSelectCategoryModal} 
                     
                     />
                </Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                             
            </Form> 

            <Modal visible={categorymodalOpen}>
                <CategorySelect
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
            
        </Container>
        </TouchableWithoutFeedback>
    );
}