import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {UserProps} from "../../models/UserProps";


interface Props {
    user: UserProps;
    open: boolean;
    handleClose : () => void;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const rand = () => Math.round(Math.random() * 20) - 10;

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}



const UserModal:React.FC<Props> = ({user, open, handleClose}) => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    useEffect(() => {
        return () => {
            user = {
                address: {city: "", geo: {lat: "", lng: ""}, street: "", suite: "", zipcode: ""},
                company: {bs: "", catchPhrase: "", name: ""},
                email: "",
                id: 0,
                name: "",
                phone: "",
                username: "",
                website: ""
            }
        }
    })

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper} >
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
        </Modal>
    )
}

export default UserModal;