//Tecnologia Usada
//TypeScript
//Expo
//Biblioteca Styled-components
//Biblioteca react-native-responsive-fontsize
//Biblioteca styled-components
// biblioteca https://react-hook-form.com



import React from "react";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";



import {

  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton
  


} from "./styles"; //Importação do styles.ts


export interface DataListaProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {

  const data : DataListaProps[] = [ // lista do app
    {
      id: '1',
      type: 'positivo',
      title: "Desenvolvimento de App",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/04/23",
    },
    {
      id: '2',
      type: 'negativo',
      title: "Hamburgueria pizza",
      amount: "R$ 69,00",
      category: {
        name: "Alimentação",
        icon: "coffee"
      },
      date: "10/04/23",
    },

    {
      id: '3',
      type: 'negativo',
      title: "Aluguel do Apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag"
      },
      date: "10/04/23",
    },
  ];
  return (
    <Container>
      <Header>


        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/82341101?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Samuel</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={() =>{}}>
          <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal={true} //função pra deixar cards ao lado do outro 
        showsHorizontalScrollIndicator={false} //função pra tirar barra de rolagem embaixo do app
        contentContainerStyle={{ paddingHorizontal: 24 }} //função pra usar style externo

      >
        <HighlightCard
          type="up" title="Entradas" amount="R$ 17.400.00" lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="down" title="Saídas" amount="R$ 1.259.00" lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlightCard
          type="total" title="Total" amount="R$ 16.141.00" lastTransaction="1 á 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item => item.id)}
          renderItem ={({item}) => <TransactionCard data={item} />}
        />

      </Transactions>

    </Container>

  )
}

