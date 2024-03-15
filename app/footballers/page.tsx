"use client"

import { Footballers } from "../components/Footballers";
import { useEffect, useState } from "react";
import { FootballPlayerRequest, createPlayer, deletePlayer, getAllPlayers, updatePlayer } from "../services/crud";
import { CreateUpdatePlayer, Mode } from "../components/CreateUpdatePlayer";

export default function FootballersPage(){
    const [players,setPlayers] = useState<FootballPlayer[]>([]);
    const [loading,setLoading] = useState(true);

    const [values,setValues] = useState<FootballPlayer>({
        id:"",
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

    const openEditModal = (player:FootballPlayer) => {
        setMode(Mode.Update);
        setValues(player);
        setIsModalOpen(true);
      }

      const handleDeletePlayer = async (id:string) => {
        await deletePlayer(id);
        closeModal();
      }
  
      const closeModal = async () => {
        setIsModalOpen(false);
      }

    useEffect(()=>{
        const getPlayers = async () => {
            const players = await getAllPlayers();
            setLoading(false);
            setPlayers(players);
        }
        getPlayers();
    },[])

    return(
    <div>
        {loading ? <div>Loading...</div> : <Footballers players={players} handleOpen={openEditModal} handleDelete={handleDeletePlayer}/>}
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