import React, { useState, useEffect } from 'react';
import Users from "./components/users/Users";
import {UserProps} from "./models/UserProps";

import './App.css';

// interface Props {
//     users?:Array<UserProps>
// }

const App = () => {

    const [usersData, setUsersData] = useState<Array<UserProps>>([]);
    const [user, setUser] = useState<UserProps | undefined>({
        email: '',
        id: 0,
        name: '',
        phone: '',
        username: '',
        website: '',
        address : {
            city: '',
            geo: {
                lat: '',
                lng: '',
            },
            street: '',
            suite: '',
            zipcode: '',
        },
        company : {
            bs: '',
            catchPhrase: '',
            name: '',
        }
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const showUserInfo = async (id:number) => {
        let user = await usersData.find((user:UserProps) => user.id === id);
        await setUser(user);
        console.log(user)
        await handleOpen();
    }

    const navigateWebSite = async (id:number) => {
        let user = await usersData.find((user:UserProps) => user.id === id);
        return user ? user.website : '';
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json());
            console.log(data)
            setUsersData(data);
        }
        fetchUsers();
    },[])

    return (
        <div className="App">
            <header className="App-header">
                Display interactive
            </header>
            <main className="App-main">
                <Users
                    users={usersData}
                    showUserInfo={showUserInfo}
                    navigateWebSite={navigateWebSite}
                    user={user}
                    handleClose={handleClose}
                    open={open}
                />
            </main>

        </div>
    );
}

export default App;



