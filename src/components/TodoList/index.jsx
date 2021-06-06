import React from 'react'
import { Container } from "../Container"
import { TodoPanel } from '../TodoPanel'
import styled from "styled-components";
import { Input, DatePicker, Button, Checkbox } from "antd";
import { TodoItem } from "../TodoItem"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add_todo } from "../../store/actions";
import { motion } from "framer-motion"
import { set_filter, ALL, COMPLETED, ACTIVE } from "../../store/actions"
import { Link} from 'react-router-dom'

// sub-components

const InputBlock = styled.div`
    display: flex;
    justify-content: space-between;
  `;
// main component
export const TodoList = () => {
  // hooks
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  // store
  const todos = useSelector((state) => state.todos);
  const currentFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  function onChangeDate(date) {
    // console.log(date, dateString);
    setDate(date);
  }
  // onclick button Add
  const onAdd = () => {
    text && date && dispatch(add_todo(text, date));
  };
  const filtered_todos = () => {
    switch (currentFilter) {
      case ALL:
        return todos;
      case COMPLETED:
        return todos.filter((el) => el.checked === true);
      case ACTIVE:
        return todos.filter((el) => el.checked === false)
      default:
        return todos;
    }
  };
  return (
    <div>
      <Container>
        <span className="headline">
        <Link to="/panel">

          <motion.h1 className="area"
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}>My Todo List</motion.h1>
            <h5>Жмите сюда!</h5>
        </Link>

        </span>
        <InputBlock>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type smth..."
            style={{ width: 350 }}
          />
          <DatePicker value={date} onChange={onChangeDate} />
          <Button onClick={onAdd} type="primary">
            Add
            </Button>
        </InputBlock>
        <div className="filters">
          <Checkbox checked={currentFilter === ALL} style={{ marginRight: 10 }}
            onChange={() => {
              dispatch(set_filter(ALL))
            }} >All</Checkbox>
          <Checkbox checked={currentFilter === COMPLETED}
            onChange={() => {
              dispatch(set_filter(COMPLETED))
            }} style={{ marginRight: 10 }} >Completed</Checkbox>
          <Checkbox checked={currentFilter === ACTIVE}
            onChange={() => {
              dispatch(set_filter(ACTIVE))
            }}
            style={{ marginRight: 10 }} >ACTIVE</Checkbox>
        </div>
        <div>
          {filtered_todos().map((el, id) => {
            return <TodoItem
              key={id} id={el.id} todo={el} />;
          })}
        </div>
      </Container>
    </div>
  );
        }