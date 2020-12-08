import React from 'react';
import Drawer, {
    DrawerHeader,
    DrawerTitle,
    DrawerContent
} from '@material/react-drawer';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { filterProducts, filterModel, sortProducts } from "../../redux/actions/carActionsCreates";

export default function AppDrawer(){
    const cars = useSelector(state => state.cars.cars);
    const size = useSelector(state => state.cars.size);
    const model = useSelector(state => state.cars.model);
    const sort = useSelector(state => state.cars.sort);
    const filteredProducts = useSelector(state => state.cars.filteredItems);
    const dispatch = useDispatch();

    return(
        <Drawer id="app-drawer">
            <DrawerHeader>
                <DrawerTitle>React Onliner</DrawerTitle>
            </DrawerHeader>
            <DrawerContent>
            <InputLabel id="sort">Order by</InputLabel>
            <Select
                className="select" 
                labelId="sort"
                id="select"
                value={sort}
                onChange={(event) => {
                    dispatch(sortProducts(
                      filteredProducts,
                      event.target.value
                    ));
                  }}
            >
                <MenuItem value="lowestspeed">Slower to faster</MenuItem>
                <MenuItem value="highestspeed">Faster to slower</MenuItem>
            </Select>
            <InputLabel id="sort">Filter Brand</InputLabel>
            <Select
                className="select" 
                labelId="sort"
                id="select"
                value={size}
                onChange={(event) => {
                    dispatch(filterProducts(
                        cars,
                        event.target.value
                    ));
                }}
            >
                <MenuItem value="">ALL</MenuItem>
                <MenuItem value="BMW">BMW</MenuItem>
                <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                <MenuItem value="Mersedes">Mersedes</MenuItem>
                <MenuItem value="Tesla">Tesla</MenuItem>
                <MenuItem value="Lexus">Lexus</MenuItem>
            </Select>
            <InputLabel id="sort">Filter Model</InputLabel>
            <Select
                className="select" 
                labelId="sort"
                id="select"
                value={model}
                onChange={(event) => {
                    dispatch(filterModel(
                        cars,
                        event.target.value
                    ));
                }}
            >
                <MenuItem value="">ALL</MenuItem>
                <MenuItem value="M4">M4</MenuItem>
                <MenuItem value="Polo">Polo</MenuItem>
                <MenuItem value="S-coupe">S-coupe</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="LFA">LFA</MenuItem>
            </Select>
            </DrawerContent>
        </Drawer>
    )
}