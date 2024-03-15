"use client"

import Button from "antd/es/button/button";
import { CreateUpdatePlayer, Mode } from "./components/CreateUpdatePlayer";
import { useState } from "react";
import { FootballPlayerRequest, createPlayer, deletePlayer, updatePlayer } from "./services/crud";

export default function Home(){
    const [values,setValues] = useState<FootballPlayer>({
      id: "",
      firstName:"",
      lastName:"",
      gender:"",
      dateOfBirth:new Date(),
      teamName:"",
      country:"",
    });

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);
  
    const handleCreatePlayer = async (request: FootballPlayerRequest) => {
      await createPlayer(request);
      closeModal();
    }

    const handleUpdatePlayer = async (id:string, request: FootballPlayerRequest) => {
      await updatePlayer(id,request);
      closeModal();
    }

    const openModal = async () => {
      setMode(Mode.Create);
      setIsModalOpen(true);
    }

    const closeModal = async () => {
      setIsModalOpen(false);
    }

    return(
    <div>
        <h1>Добавление футболиста</h1>
        <Button onClick={openModal}>Добавить футболиста</Button>
        <CreateUpdatePlayer 
        mode={mode} 
        values={values} 
        isModalOpen={isModalOpen} 
        handeCreate={handleCreatePlayer} 
        handleUpdate={handleUpdatePlayer} 
        handleCancel={closeModal} ></CreateUpdatePlayer>
    </div>
  )
}