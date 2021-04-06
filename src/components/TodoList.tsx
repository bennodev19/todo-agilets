import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useAgile } from "@agile-ts/react";
import { MY_TODOS, removeTodo, toggleTodo, updateTodo } from "../store";

function TodoListItems() {
  const todos = useAgile(MY_TODOS.getGroupWithReference("default"));

  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            isChecked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(event) => updateTodo(todo.id, event.target.value)}
          />
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
