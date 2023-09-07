import { FC, useState } from "react";
import s from './mainPage.module.scss'
import React from "react";
import { RadioItem, RadioFilter } from "../components";
import { Button, Input, Text } from "../ui";
import {FilterList} from "../constants";


interface ITask{
  id: string;
  text: string;
  isActive: boolean;
}

const MainPage:FC = () =>{
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskFilter, setTaskFilter] = useState('all');  
  const addTask = (text: string) =>{
    if(text.length===0){
      return;
    }
    setTaskList([...taskList,{id:`${Date.now()}`,isActive:true,text}])
  }
  const changeTaskStatus = (id:string) =>{
    const newTaskList=taskList.map((task: ITask)=>task.id===id?{...task,isActive:!task.isActive}:task)
    setTaskList(newTaskList);
  }
  const clearComplited = () =>{
    const newTaskList = taskList.filter((task: ITask)=>task.isActive)
    setTaskList(newTaskList);
  }
    return(
        <div className={s.todos}>
          <Text>
            Todos 
          </Text>
          <Input onSubmit={addTask}/>
          <div className={s.todos__list}>
            {taskList.map((task: ITask)=>{
            if(taskFilter==='all'){
              return <RadioItem onClick={changeTaskStatus} key={task.id} isActive={task.isActive} name={task.id} text={task.text}/>
            }
            if(taskFilter==='active' && task.isActive){
              return <RadioItem onClick={changeTaskStatus} key={task.id} isActive={task.isActive} name={task.id} text={task.text}/>
            }
            if(taskFilter==='complited' && !task.isActive){
              return <RadioItem onClick={changeTaskStatus}  key={task.id} isActive={task.isActive} name={task.id} text={task.text}/>
            }
            })}
          </div>
          <div className={s.todos__menu}>
            <RadioFilter filterList={FilterList} option={taskFilter} onChange={setTaskFilter}/>
            <Button type="button" onClick={clearComplited} variant='clear'>
              <Text>
                clear complited
              </Text>
            </Button>
          </div>
        </div>
    )
}

export default MainPage;