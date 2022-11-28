import { useContext, useState } from 'react';

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined, DashboardOutlined, DirectionsCarFilledOutlined,TaxiAlertOutlined } from '@mui/icons-material';

import { UiContext, AuthContext } from '../../context';
import { useRouter } from 'next/router';


export const SideMenu = () => {

    const router = useRouter();
    const { isMenuOpen, toggleSideMenu } = useContext( UiContext );
    const { user, isLoggedIn, logout } = useContext(  AuthContext );
 
    const navigateTo = ( url: string ) => {
        toggleSideMenu();
        router.push(url);
    }

  return (
    <Drawer
        open={ isMenuOpen }
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={ toggleSideMenu }
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>            
            <List> 
                {
                    isLoggedIn && (
                        <>
                            <ListItem button onClick={() => navigateTo('/perfil')}>
                                <ListItemIcon>
                                    <AccountCircleOutlined/>
                                </ListItemIcon>
                                <ListItemText primary={'Perfil'} />
                            </ListItem>

                            <Divider />


                            <ListItem button onClick={() => navigateTo('/perfil/vehiculos')}>
                                <ListItemIcon>
                                    <DirectionsCarFilledOutlined/>
                                </ListItemIcon>
                                <ListItemText primary={'Mis Vehiculos'} />
                            </ListItem>
                            
                            <Divider/>

                            <ListItem button onClick={() => navigateTo('/solicitudes')}>
                                <ListItemIcon>
                                    <TaxiAlertOutlined/>
                                </ListItemIcon>
                                <ListItemText primary={'Mis Solicitudes de Repuestos'} />
                            </ListItem>
                            
                            <Divider/>                            
                        </>
                    )
                }


                {
                    isLoggedIn 
                    ? (
                        <ListItem button onClick={ logout }>
                            <ListItemIcon>
                                <LoginOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={'Salir'} />
                        </ListItem>
                    )
                    : (
                        <ListItem 
                            button
                            onClick={ () => navigateTo(`/auth/login?p=${ router.asPath }`) }
                        >
                            <ListItemIcon>
                                <VpnKeyOutlined/>
                            </ListItemIcon>
                            <ListItemText primary={'Ingresar'} />
                        </ListItem>
                    )
                }



                {/* Admin */}
                {
                    user?.role === 'admin' && (
                        <>
                            <Divider />
                            <ListSubheader>Admin Panel</ListSubheader>

                            <ListItem 
                                button
                                onClick={ () => navigateTo('/admin/') }>
                                <ListItemIcon>
                                    <DashboardOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Dashboard'} />
                            </ListItem>

                            <ListItem button
                                      onClick={ () => navigateTo('/admin/products') }>
                                <ListItemIcon>
                                    <CategoryOutlined/>
                                </ListItemIcon>
                                <ListItemText primary={'Productos'} />
                            </ListItem>
                            <ListItem 
                                button
                                onClick={ () => navigateTo('/admin/orders') }>
                                <ListItemIcon>
                                    <ConfirmationNumberOutlined/>
                                </ListItemIcon>
                                <ListItemText primary={'Ordenes'} />
                            </ListItem>

                            <ListItem 
                                button
                                onClick={ () => navigateTo('/admin/users') }>
                                <ListItemIcon>
                                    <AdminPanelSettings/>
                                </ListItemIcon>
                                <ListItemText primary={'Usuarios'} />
                            </ListItem>                        
                        </>
                    )
                }
            </List>
        </Box>
    </Drawer>
  )
}