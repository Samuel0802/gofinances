import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,


} from "./style";

interface Category {
  name: string;
  icon: string;
}

interface Props {
  data: TransactionCardProps;

}

 export interface TransactionCardProps {
  type: 'positivo' | 'negativo';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export function TransactionCard({ data }: Props) {

  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {data.type === 'negativo' && '- '}
        {data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}