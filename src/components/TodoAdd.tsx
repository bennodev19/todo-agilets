import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { addTodo } from "../store";

function TodoAdd() {
  const [currentInput, setCurrentInput] = React.useState("");

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={currentInput}
        onChange={(event) => setCurrentInput(event.target.value)}
      />
      <Button
        onClick={() => {
          addTodo(currentInput);
          setCurrentInput("");
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
