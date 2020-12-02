/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProvidersListTitle,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
  openingHours: number;
  finishingHours: number;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('providers').then((response) => {
      setProviders(response.data);
    });
  }, []);

  const handleSelectProvider = useCallback(
    (providerId: string) => {
      navigation.navigate('AppointmentDatePicker', { providerId });
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <ProfileButton onPress={() => navigation.navigate('Profile')}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>

        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <Icon name="log-out" onPress={signOut} style={styles.icon} />
      </Header>

      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Restaurantes</ProvidersListTitle>
        }
        renderItem={({ item: provider }) => (
          <ProviderContainer onPress={() => handleSelectProvider(provider.id)}>
            <ProviderAvatar source={{ uri: provider.avatar_url }} />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="calendar" size={14} color="#a18de7" />
                <ProviderMetaText>Todos os dias</ProviderMetaText>
              </ProviderMeta>
              <ProviderMeta>
                <Icon name="clock" size={14} color="#a18de7" />
                <ProviderMetaText>
                  {provider.openingHours}h às {provider.finishingHours}h
                </ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
});

export default Dashboard;
