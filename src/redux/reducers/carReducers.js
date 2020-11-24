
import * as constants from './../constants';

const initialState = [

    {
        id:1,
        car:"Tesla",
        model:"М",
        speed: 250,
        weight:2.1,
        description:"Лучший автомобиль на планете Земля"
    },
    {
        id:2,
        car:"Lexus",
        model: "LFA",
        speed: 280,
        weight:1.8,
        description:"Почти лучший автомобиль на планете Земля"
    },
    {
        id:3,
        car:"Mercedes",
        model:"S-coupe",
        speed: 300,
        weight:2.1,
        description:"Быстрый бизнес класс"
    },
    {
        id:4,
        car:"ВАЗ",
        model:"2101",
        speed: 180,
        weight:2.4,
        description:"Ведро. Если повезет, то повезет"
    },
    {
        id:5,
        car:"BMW",
        model:"5",
        speed: 290,
        weight:2.1,
        description:"Пушка-гонка"
    }
  ];


export default function carsReducer(state = initialState, action) {
  switch (action.type) {  
    case constants.ADD_CAR:
      return  [...state, action.payload];
    case constants.REMOVE_CAR:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
