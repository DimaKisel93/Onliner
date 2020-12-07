import React from 'react';
import Drawer, {
    DrawerHeader,
    DrawerTitle,
    DrawerContent
} from '@material/react-drawer';
import { Checkbox, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function AppDrawer(){
    
    return(
        <Drawer id="app-drawer">
            <DrawerHeader>
                <DrawerTitle>React Todo</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
                <TextField id="standard-basic" label="Standard" size="small"/>
                <Button size="small" variant="contained">Default</Button>
                <SearchIcon fontSize="large" />
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
                <Checkbox></Checkbox>
            </DrawerContent>
        </Drawer>
    )
}