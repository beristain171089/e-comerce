import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

export default function Menu() {

    const navigation = useNavigation();

    return (
        <>
            <List.Section>
                <List.Subheader>Mi Cuenta</List.Subheader>
                <List.Item
                    title='Cambiar nombre'
                    description='Cambia el nombre de tu cuenta'
                    left={(props) => <List.Icon {...props} icon='face' />}
                    onPress={() => console.log("dsfsdf")}
                />
                <List.Item
                    title='Cambiar email'
                    description='Cambia el email de tu cuenta'
                    left={(props) => <List.Icon {...props} icon='at' />}
                    onPress={() => console.log("dsfsdf")}
                />
                <List.Item
                    title='Cambiar username'
                    description='Cambia el nombre de usuario de tu cuenta'
                    left={(props) => <List.Icon {...props} icon='sim' />}
                    onPress={() => console.log("dsfsdf")}
                />
                <List.Item
                    title='Cambiar contraseña'
                    description='Cambia la contraseñ de tu cuenta'
                    left={(props) => <List.Icon {...props} icon='key' />}
                    onPress={() => console.log("dsfsdf")}
                />
                <List.Item
                    title='Mis direcciones'
                    description='Administra tus direcciones de envio'
                    left={(props) => <List.Icon {...props} icon='map' />}
                    onPress={() => console.log("dsfsdf")}
                />
            </List.Section>
            <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item
                    title='Pedidos'
                    description='Listado de todos mis pedidos'
                    left={(props) => <List.Icon {...props} icon='clipboard-list' />}
                    onPress={() => console.log("dsfsdf")}
                />
                <List.Item
                    title='Lista de deseos'
                    description='Listado de todos los productos que deseas'
                    left={(props) => <List.Icon {...props} icon='heart' />}
                    onPress={() => navigation.navigate('favorites')}
                />
                <List.Item
                    title='Cerrar sesión'
                    description='Cierra esta sesión e inicia con otra'
                    left={(props) => <List.Icon {...props} icon='logout' />}
                    onPress={() => console.log("dsfsdf")}
                />
            </List.Section>
        </>
    )
}

const styles = StyleSheet.create({

});
