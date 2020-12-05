import React from 'react';
import Drawer, {
    DrawerHeader,
    DrawerTitle,
    DrawerContent
} from '@material/react-drawer';

export default function AppDrawer(){
    
    return(
        <Drawer id="app-drawer">
            <DrawerHeader>
                <DrawerTitle>React Todo</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
                
            </DrawerContent>
        </Drawer>
    )
}