import React, {useEffect, useState} from 'react';
import './App.css';
import {filterUsers, getUsersAsyncAction, User} from "./redux/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredUsersSelector, TState} from "./redux/appSelectors";



export interface Filter {
    name?: string,
    lastname?: string,
    age?: string,
    sex:
        {
            m: boolean,
            f: boolean
        }
}


const App:React.FC = ():React.ReactElement => {

      const dispatch = useDispatch();

      const [filter, setFilter] = useState<Filter>({sex: {m: true, f: true}});

      useEffect(() => {
          dispatch(getUsersAsyncAction());
      },[dispatch]);

      useEffect(() => {
          dispatch(filterUsers(filter))
      }, [dispatch,filter]);

      const filteredUsers  = useSelector((state: TState) => getFilteredUsersSelector(state));

      const onChangeName = (e:React.ChangeEvent<HTMLInputElement>):void => {
          setFilter({...filter, name: e.target.value});
      };

      const onChangeLastName = (e:React.ChangeEvent<HTMLInputElement>):void => {
          setFilter({...filter, lastname: e.target.value});
      };

      const onChangeAge = (e:React.ChangeEvent<HTMLInputElement>):void => {
          setFilter({...filter, age: e.target.value});
      };

      const onChangeMale = (e:React.ChangeEvent<HTMLInputElement>):void => {
          setFilter({...filter, sex: {...filter.sex , m: e.target.checked}});
      };

      const onChangeFemale = (e:React.ChangeEvent<HTMLInputElement>):void => {
          setFilter({...filter, sex: {...filter.sex , f: e.target.checked}});
      };

      return (
        <div className={'App'}>
            <div className={'wrapper'}>
                <div className={'filter'}>
                    <p>Фильтры</p>
                    <div className={'inputContainer'}>
                        <label>
                            Имя
                            <input onChange={onChangeName}/>
                        </label>
                    </div>
                    <div className={'inputContainer'}>
                        <label>
                            Фамилия
                            <input onChange={onChangeLastName}/>
                        </label>
                    </div>
                    <div className={'inputContainer'}>
                        <label>
                            Возраст
                            <input onChange={onChangeAge}/>
                        </label>
                    </div>
                    <div className={'checkBoxContainer'}>
                        <span>Пол</span>
                        <label>
                            <input onChange={onChangeMale} name={'male'} type={'checkbox'} checked={filter.sex.m}/>
                            <span>м</span>
                        </label>
                        <label>
                            <input onChange={onChangeFemale} name={'female'} type={'checkbox'} checked = {filter.sex.f}/>
                            <span>ж</span>
                        </label>
                    </div>
                </div>
                <div className={'users'}>
                    {filteredUsers.map((user:User, index: number) => {
                        const gender = user.sex === 'm' ? 'Мужской' : 'Женский';
                        return <div key={index} className={'user'}>
                            <div className={'userName'}>
                                <div>{user.name} </div>
                                <div className={'userLastName'}>{user.lastname}</div>
                            </div>
                            <div>Возраст: {user.age}</div>
                            <div>Пол: {gender}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
  );
};

export default App;
