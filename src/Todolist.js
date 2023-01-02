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
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";

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

  // updating...........................

  const handledit = (id) => {
    // newitem.splice(editindex, 1, initial);
    // setnewitem("");
    seteditindex(newitem[id]);
    console.log(newitem[id]);

    // newitem.splice(editindex, 1, newitem);
    // seteditindex(initial[id]);
    // setnewitem(...newitem[id]);

    setshow(true);
    seteditindex(id);
  };

  const update = () => {
    // array splice method  =  add editiindex , 1 remove , adding values like initial.....
    newitem.splice(editindex, 1, initial);
    // newitem.splice(editindex, 1, newitem);
    setnewitem([...newitem]);
    setshow(false);
    setinitial("");
  };

  return (
    <>
      <Box>
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

                {!show ? (
                  <textarea
                    type="text"
                    placeholder="edit item"
                    value={handledit}
                  ></textarea>
                ) : (
                  ""
                )}

                {/* {!show ? (
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={clickevent}
                  >
                    Add
                  </Button>
                ) : (
                  <Button variant="contained" className="btn" onClick={update}>
                    Save
                  </Button>
                )} */}

                {/* {!show ? (
                  <SaveIcon className="btn" onClick={update}></SaveIcon>
                ) : (
                  <EditIcon
                    className="edit"
                    onClick={(id) => handledit(id)}
                  ></EditIcon>
                )} */}

                {/* {!show ? (
                  <SaveIcon type="text" onChange={update}></SaveIcon>
                ) : (
                  <Button
                    variant="contained"
                    className="btn"
                    onClick={clickevent}
                  >
                    ADD
                  </Button>
                )} */}
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
                            >
                              {/* {
                                   !show ? (<button onClick={clickevent}></button>):( < />)
                                 } */}
                            </EditIcon>
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
      </Box>
    </>
  );
};

export default Todolist;
