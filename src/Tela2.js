import React from 'react';
import {ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';

import {useRoute} from '@react-navigation/native';

const Tela2 = () => {
  const route = useRoute();

  const data = route.params.data;

  const showCopyMessage = () => {
    Toast.show({
      type: 'success',
      text1: 'Tudo pronto',
      text2: 'Descrição copiada com sucesso',
    });
  };

  const copyToClipboard = stringToCopy => {
    Clipboard.setString(stringToCopy);
    showCopyMessage();
  };

  return (
    <ScrollView style={{padding: 10}}>
      <Image source={{uri: data.image}} style={{width: 150, height: 300}} />
      <Text>FILME: {data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <TouchableOpacity
        onPress={() => copyToClipboard(data.descricao)}
        style={{flexDirection: 'row', flex: 1}}>
        <Text style={{width: '90%'}}>DESCRIÇÃO: {data.descricao}</Text>
        <Icon
          name="copy"
          size={20}
          color="gray"
          style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Tela2;
