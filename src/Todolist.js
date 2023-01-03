import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, IconButton, Input, Paper, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
// import SaveIcon from "@mui/icons-material/Save";
// import Todo from "./Todo";

const Todolist = () => {
  const [initial, setinitial] = useState(""); // array

  const [newitem, setnewitem] = useState([]); // no use
  const [show, setshow] = useState(false); // no use
  const [editindex, seteditindex] = useState(); // no use

  React.useEffect(() => {
  console.log("newitem", newitem)
  }, [newitem])

  const handlist = (event) => {
    setinitial(event.target.value);
  };

  const clickevent = () => {
    setnewitem((prevalue) => {
      return [...prevalue, initial];
    });

    // console.log(newitem);
    // console.log(initial);

    setinitial("");
  };

  const deleteItem = (id) => {
    console.log("delete");

    setnewitem((prevalue) => {
      return prevalue.filter((arrele, index) => {
        return index !== id;
      });
    });
  };

  const updateTodo = (newTodo, index) => {
    console.log("newTodo", newTodo)
    setnewitem((currentState) => {
      let newTodos = [...currentState]
      newTodos[index] = newTodo
      return newTodos
    })
  }

  // const updateItem = (id) => {
  //   setinitial((val) => {
  //     return val.filter((arrele, index) => {
  //       return index === id;
  //     });
  //   });
  // };

  // updating...........................

  // const handledit = (id) => {

  //   // newitem.splice(editindex, 1, initial);
  //   // setnewitem("");
  //   seteditindex(newitem[id]);
  //   console.log(newitem[id]);

  //   // newitem.splice(editindex, 1, newitem);
  //   // seteditindex(initial[id]);
  //   // setnewitem(...newitem[id]);

  //   setshow(true);
  //   seteditindex(id);
  // };

  // const update = () => {
  //   // array splice method  =  add editiindex , 1 remove , adding values like up to initial.....
  //   newitem.splice(editindex, 1, initial);
  //   setnewitem([...newitem]);
  //   setshow(false);
  //   setinitial("");
  // };

  // const update = (todo, todoValue, setIsEditable, index) => {
  //   newitem.splice(todoValue, 1, todo);
  //   setnewitem([...newitem]);

  //   console.log(todoValue);
  //   console.log(todo);
  //   setIsEditable(false);
  // };

  return (
    <>
      <Box className="box">
        <Container maxWidth="sm" className="contai">
          <div className="frm">
            <div className="fom">
              <div className="header">
                <Grid className="hed">TODO APP</Grid>
              </div>
              <div className="intp">
                <Input
                  type="text"
                  placeholder="Enter your Items"
                  className="int"
                  value={initial}
                  onChange={handlist}
                />
              </div>

              <div className="butt">
                <Button
                  variant="contained"
                  className="btn"
                  onClick={clickevent}
                >
                  ADD
                </Button>
              </div>

              <div className="item">
                <div className="ite">
                  {newitem.map((todo, id) => (
                    <Todo
                      key={id}
                      todo={todo}
                      index={id}
                      deleteItem={deleteItem}
                      updateTodo={updateTodo}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
};

// export default Todolist;

const Todo = (props) => {
  const { todo, index, deleteItem, updateTodo } = props;
  const [newitem, setnewitem] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [todoValue, setTodoValue] = useState(todo);

  // const update = (todo, id) => {
  //   setnewitem((todo, id, newval) => {
  //     // return val.map((arrele, index) => {
  //     //   return index !== id;
  //     // });

  //     // const valr = (index, todo) => {
  //     //   const updated = [...todo];
  //     //   newitem[index] = todo;
  //     //   setTodoValue(todo);
  //     // };

  //     // console.log(todo);
  //     // console.log(id);
  //     // console.log(newval);

  //     return todo.map((t) => {
  //       if (t.id === id) {
  //         if (newval) {
  //           return { ...t, val: newval };
  //         } else {
  //           return { ...t, completed: !t.completed };
  //         }
  //       } else {
  //         return t;
  //       }
  //     });
  //   });

  //   console.log(todoValue);
  //   console.log(todo);
  //   setIsEditable(false);
  // };

  return (
    <Container maxWidth="sm">
      <Paper className="todlist">
        <Checkbox></Checkbox>
        {isEditable ? (
          <>
            <Input
              type="text"
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <Button size="small" onClick={() => {
              updateTodo(todoValue, index)
              setIsEditable(false)
            }}>
              Save
            </Button>
          </>
        ) : (
          <>
            <div className="list">{todo}</div>
            <IconButton
              className="edit"
              onClick={() => setIsEditable(!isEditable)}
            >
              <EditIcon />
            </IconButton>
            <DeleteIcon
              className="clear"
              onClick={() => deleteItem(index)}
            ></DeleteIcon>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Todolist;
