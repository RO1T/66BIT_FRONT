import Modal from "antd/es/modal/Modal";
import { FootballPlayerRequest } from "../services/crud"
import Input from "antd/es/input/Input";
import { use, useEffect, useState } from "react";
import Radio from "antd/es/radio";
import { DatePicker, Select } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import {countriesList} from "../shared/countries"

type CUPProps = {
    mode: Mode,
    values: FootballPlayer,
    isModalOpen: boolean,
    handleCancel: () => void,
    handeCreate: (request: FootballPlayerRequest) => void;
    handleUpdate: (id: string, request: FootballPlayerRequest) => void;
}

export enum Mode {
    Create,
    Update,
}

export const CreateUpdatePlayer = ({mode,values,isModalOpen,handleCancel,handeCreate,handleUpdate}:CUPProps) => {

    const [firstName,setName] = useState<string>("");
    const [lastName,setLastname] = useState<string>("");
    const [gender,setGender] = useState<string>("");
    const [dateofbirth, setDateofbirth] = useState<Date>(new Date());
    const [teamname,setTeamname] = useState<string>("");
    const [country,setCountry] = useState<string>("");

    useEffect(()=>{
        setName(values.firstName);
        setLastname(values.lastName);
        setGender(values.gender);
        setDateofbirth(values.dateOfBirth);
        setTeamname(values.teamName);
        setCountry(values.country)
    },[values])

    const handleOnOk = async () => {
        const playerRequest = {
            firstName,
            lastName,
            gender,
            dateofbirth,
            teamname,
            country
        }

        mode == Mode.Create ? handeCreate(playerRequest) : handleUpdate(values.id, playerRequest);
    }

    return (
    <Modal 
    title={mode === Mode.Create ? "Добавить футболиста" : "Редактировать футболиста"}
    open={isModalOpen}
    cancelText={"Отмена"}
    onOk={handleOnOk}
    onCancel={handleCancel}
    >
        <div className="player__modal">
            <h3>Имя</h3>
            <Input
                value={firstName}
                onChange={e => setName(e.target.value)}
                placeholder={"Введите имя"}
            />
            <h3>Фамилия</h3>
            <Input
                value={lastName}
                onChange={e => setLastname(e.target.value)}
                placeholder={"Введите фамилию"}
            />
            <h3>Пол</h3>
            <Radio.Group value={gender} onChange={e => setGender(e.target.value)}>
                <Radio value="Male">Мужчина</Radio>
                <Radio value="Female">Женщина</Radio>
            </Radio.Group>
            <h3>Дата рождения</h3>
            <DatePicker locale={locale} defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} onChange={(date, dateString) => {
                setDateofbirth(date.toDate());
            }}/>;
            <h3>Команда</h3>
            <Input value={teamname} onChange={e => setTeamname(e.target.value)} placeholder={"Введите команду"}/>
            <h3>Страны</h3>
            <Select onChange={e => setCountry(e)} placeholder={"Выберите страну"} showSearch>
                {countriesList.map(country => <Select.Option key={country}>{country}</Select.Option>)}
            </Select>
        </div>
    </Modal>
    );
}