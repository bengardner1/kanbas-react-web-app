import React from "react";
import Add from "./add";
import ClickEvent from "./clickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./passingFunctions";
import EventObject from "./eventObject";
import Counter from "./counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateValues";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
 return(
   <>
     <h1>Assignment 4</h1>
     <ReduxExamples/>
     <ParentStateComponent/>
     <ArrayStateVariable/>
     <ObjectStateVariable/>
     <DateStateVariable/>
     <StringStateVariables/>
     <BooleanStateVariables/>
     <Counter/>
     <EventObject/>
     <PassingFunctions theFunction={sayHello} />
     <Add a={1} b ={2} />
     <ClickEvent/>
     <PassingDataOnEvent/>
   </>
 );
};
export default Assignment4;