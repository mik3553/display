import React from 'react';
import UserModal from '../user/UserModal';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {UserProps} from "../../models/UserProps";

import './users.css'


const useStyles = makeStyles({
    table: {
        width: 900,
        textAlign:"center",
        margin:'auto',
        marginTop:20,
        marginBottom:20,
    },
});

interface Props {
    users: Array<UserProps>;
    showUserInfo:(id:number) => Promise<void>;
    user:UserProps | undefined;
    open: boolean;
    handleClose:() => void;
}

const Users:React.FC<Props> = ({users, showUserInfo, user, handleClose, open}) => {

    const classes = useStyles();

    return (
        <>
            {user && <UserModal user={user} open={open} handleClose={handleClose} />}
            <TableContainer data-testid="users" component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>username</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">website</TableCell>
                            <TableCell align="right">company name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user:any) => (
                            <TableRow key={user.id}>
                                <TableCell className="table-row" onClick={() => showUserInfo(user.id)} component="th" scope="row">
                                    {user.username}
                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <a href={user.website} target="_blank" ><TableCell align="right">{user.website}</TableCell></a>
                                <TableCell align="right">{user.company.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Users;