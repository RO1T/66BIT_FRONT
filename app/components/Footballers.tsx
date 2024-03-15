import Card from "antd/es/card/Card"
import { FootballerCardTitle } from "./FootballersTitle"
import Button from "antd/es/button/button"

type FootballersProps = {
    players: FootballPlayer[],
    handleDelete: (id: string) => void;
    handleOpen: (player: FootballPlayer) => void;
}


export const Footballers = ({players, handleDelete, handleOpen}: FootballersProps) => {
    return (
        <div className="players">
            {players.map((player:FootballPlayer) => (
                <Card 
                key={player.id} 
                title={<FootballerCardTitle firstName={player.firstName} lastName={player.lastName}/>} 
                bordered={false}>
                    <p>{player.country} {player.gender} {player.dateOfBirth.toString().substring(0, 10)} {player.teamName}</p>
                    <div className="card__buttons">
                        <Button onClick={() => handleOpen(player)} style={{flex:1}}>
                            Edit
                        </Button>
                        <Button onClick={() => handleDelete(player.id)} style={{flex:1}} danger>
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}
