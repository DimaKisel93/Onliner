import React, {useEffect, useState} from 'react';
import { db } from '../firebase';

import styles from '../style/App.scss';

import  AppDrawer  from './AppDrawer/index';
import  AppContent  from './AppContent/index';

function Cars(){
    const [todos, setTodos] = useState([])
    console.log(styles)
    useEffect(() => {  
        db.collection("Cars")
        .get()
        .then(snapshot => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setTodos(todos)
            
            console.log(todos)
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
    }  
    , [])

    return ( 
        <div className="main__container">
            <AppDrawer />
            <AppContent>
                    {todos.map(todo => 
                        <ul key={todo.id} >
                            <li>{todo.brand}</li>
                            <li>{todo.model}</li>
                            <li>{todo.speed}</li>
                            <li>{todo.weight}</li>
                            <li>{todo.description}</li>
                        </ul> 
                    )}
            </AppContent>
        </div>
    )
}

export default Cars;