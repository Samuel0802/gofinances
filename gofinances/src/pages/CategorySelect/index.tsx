import React from "react";
import { Button } from "../../components/Forms/Button";
import { FlatList } from "react-native";
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Saparator,
    Footer


} from "./styles";
import { categories } from "../../utils/categories";



interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (name: Category) => void;
    closeSelectCategory: () => void
}


export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {

function handeleCategorySelect(category: Category){
setCategory(category);
}

    return (
        <Container>
            <Header>
                <Title>{category.name}</Title>
            </Header>

            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category
                        onPress={() => handeleCategorySelect(item)}
                        isActive={category.key == item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Saparator />}
            />

            <Footer>
                <Button title="Selecionar" onPress={closeSelectCategory} />

            </Footer>
        </Container>
    );

}