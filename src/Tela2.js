import React from 'react';
import {ScrollView, Text, Image} from 'react-native';

import {useRoute} from '@react-navigation/native';

const Tela2 = () => {
  const route = useRoute();

  const data = route.params.data;

  return (
    <ScrollView>
      <Image source={{uri: data.image}} style={{width: 150, height: 300}} />
      <Text>FILME: {data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <Text>DESCRIÇÃO: {data.descricao}</Text>
    </ScrollView>
  );
};

export default Tela2;
