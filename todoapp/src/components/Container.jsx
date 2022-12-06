import React from "react";
import { useState } from "react";
import FormTodo from "./FormTodo";
import Tasks from "./Tasks";
//Comentario en JS
const Container = () =>{
    const [list, setList] = useState([]);

    const addItem = addItem => {

        setList([...list, addItem])
    };

    return (
        <div>
            <FormTodo addItem={addItem}/>
            <Tasks list={list} setList={setList}/>
        </div>
    );
}

export default Container;