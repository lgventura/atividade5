import React, {useState} from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from 'react-native';
import FlatComponent from './components/FlatComponent';

import {useNavigation} from '@react-navigation/native';

const Tela1 = () => {
  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Tela2');
  };

  const data = [
    {
      key: '0',
      filme: 'SCOOBY! O filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      image:
        'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao:
        'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.',
    },
    {
      key: '1',
      filme: 'SCOOBY! O filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      image:
        'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao:
        'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.',
    },
  ];

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </ScrollView>
  );
};

export default Tela1;
