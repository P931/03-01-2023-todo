// import { Checkbox, Paper } from "@mui/material";
// import React from "react";
// import ClearIcon from "@mui/icons-material/Clear";
// import EditIcon from "@mui/icons-material/Edit";
// import Container from "@mui/material/Container";
// import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material";
// import Input from "@mui/material";

// const Todo = (props) => {
//   const { todo, index, deleteItem } = props;
//   const [isEditable, setIsEditable] = useState(false);
//   const [todoValue, setTodoValue] = useState(todo);

//   const update = (todo, index) => {

//     newitem.splice(todoValue, 1, todo);
//     setnewitem([...newitem]);

//     console.log(todoValue);
//     console.log(todo);
//     setIsEditable(false);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper className="todlist">
//         <Checkbox></Checkbox>
//         {isEditable ? (
//           <>
//             <Input
//               type="text"
//               value={todoValue}
//               onChange={(e) => setTodoValue(e.target.value)}
//             />
//             <Button
//               size="small"
//               onClick={update}
//             >
//               Save
//             </Button>
//           </>
//         ) : (
//           <>
//             <div className="list">{todo}</div>
//             <IconButton
//               className="edit"
//               onClick={() => setIsEditable(!isEditable)}
//             >
//               <EditIcon />
//             </IconButton>
//             <DeleteIcon
//               className="clear"
//               onClick={() => deleteItem(index)}
//             ></DeleteIcon>
//           </>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default Todo;
