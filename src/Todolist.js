import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, Input, Paper } from "@mui/material";
// import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Checkbox } from "@mui/material";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
// import TOlist from "./TOlist";

const Todolist = () => {
  const [initial, setinitial] = useState("");
  const [newitem, setnewitem] = useState([]);
  const [show, setshow] = useState(false);
  const [editindex, seteditindex] = useState();

  const handlist = (event) => {
    setinitial(event.target.value);
  };

  const clickevent = () => {
    setnewitem((prevalue) => {
      return [...prevalue, initial];
    });

    setinitial(" ");
  };

  const deleteItem = (id) => {
    console.log("delete");

    setnewitem((prevalue) => {
      return prevalue.filter((arrele, index) => {
        return index !== id;
      });
    });
  };

  const handledit = (id) => {
    setinitial(newitem[id]);
    setshow(true);
    seteditindex(id);
  };

  const update = () => {
    newitem.splice(editindex, 1, initial);
    setnewitem([...newitem]);
    setshow(false);
    setinitial("");
  };

  return (
    <>
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
              {!show ? (
                <Button
                  variant="contained"
                  className="btn"
                  onClick={clickevent}
                >
                  ADD
                </Button>
              ) : (
                <Button variant="contained" className="btn" onClick={update}>
                  Save
                </Button>
              )}
            </div>

            <div className="item">
              <div className="ite">
                {newitem.map((val, id) => {
                  return (
                    <>
                      <Container maxWidth="sm">
                        <Paper className="todlist">
                          <Checkbox></Checkbox>
                          <div className="list">{val}</div>
                          <EditIcon
                            className="edit"
                            onClick={() => handledit(id)}
                          ></EditIcon>
                          <DeleteIcon
                            className="clear"
                            onClick={() => deleteItem(id)}
                          ></DeleteIcon>
                        </Paper>
                      </Container>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Todolist;
