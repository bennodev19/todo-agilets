// Standard interface and functions
import { Agile, globalBind, Logger } from "@agile-ts/core";
import reactIntegration from "@agile-ts/react";

export interface TodoInterface {
  id: number;
  text: string;
  done: boolean;
}

const App = new Agile({ logConfig: { level: Logger.level.DEBUG } }).integrate(
  reactIntegration
);
export const MY_TODOS = App.createCollection<TodoInterface>({
  key: "todos",
}).persist();

export const updateTodo = (id: number, text: string): void => {
  MY_TODOS.update(id, { text: text });
};

export const toggleTodo = (id: number): void => {
  console.log("toggle");
  MY_TODOS.update(id, { done: true });
};

export const removeTodo = (id: number): void => {
  MY_TODOS.remove(id).everywhere();
};

export const addTodo = (text: string): void => {
  MY_TODOS.collect(
    {
      id:
        Math.max(
          0,
          Math.max(...MY_TODOS.getAllItemValues().map(({ id }) => id))
        ) + 1,
      text: text,
      done: false,
    },
    [],
    { method: "unshift" }
  );

  console.log(MY_TODOS);
};
