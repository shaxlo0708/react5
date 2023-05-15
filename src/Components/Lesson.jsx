// import React, { useReducer, useState } from 'react';
// const ACTIONS = {
//     KOP: 'kop',
//     BOL: 'bol'
// }

// function render(state, action) {
//     switch (action.type) {
//         case ACTIONS.KOP:
//             return { count: state.count * 2 }
//         case ACTIONS.BOL:
//             return { count: state.count / 2 }

//         default:
//             return state
//     }
// }
// export const Lesson = () => {
//     const [state, dispatch] = useReducer[render, { count: 0 }];
//     const [count, setcount] = useState(0);
//     const kop = () => {
//         dispatch({ type: ACTIONS.KOP });
//     }
//     const bol = () => {
//         dispatch({ type: ACTIONS.BOL });
//     }
//     const handlekop = () => {
//         setcount(count * 2)
//     }
//     const handlebol = () => {
//         setcount(count / 2)
//     }
//     return (
//         <div>
//             {state.count}
//             <button onClick={() => dispatch({ type: ACTIONS.BOL })}>k</button><br />
//             <button onClick={() => dispatch({ type: ACTIONS.KOP })}>b</button>
//         </div>
//     )
// }
