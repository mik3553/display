import React from 'react';

import Users from "./Users";
import {cleanup, render} from '@testing-library/react';
import {UserProps} from "../../models/UserProps";

const ReactTestRenderer = require('react-test-renderer');

const showUserInfo = () => async (id:number) => {
    return usersData.find((user: UserProps) => user.id === id);
}
const navigateWebSite = () => console.log('navigate');
const handleClose = () => console.log('close');
const user:UserProps = {
    address: {city: "", geo: {lat: "", lng: ""}, street: "", suite: "", zipcode: ""},
    company: {bs: "", catchPhrase: "", name: ""},
    email: "",
    id: 0,
    name: "",
    phone: "",
    username: "",
    website: ""
};
const usersData:Array<UserProps> = [];

afterEach(cleanup);
test('renders button correctly', () => {
    const {getByTestId}=render(<Users
        users={usersData}
        showUserInfo={showUserInfo}
        navigateWebSite={navigateWebSite}
        user={user}
        handleClose={handleClose}
        open={true}
    />);
    expect(getByTestId('users')).toHaveTextContent("website");
})

test('matches snapshot 1', () => {
    const renderer = ReactTestRenderer.create(<Users
        users={usersData}
        showUserInfo={showUserInfo}
        navigateWebSite={navigateWebSite}
        user={user}
        handleClose={handleClose}
        open={true}
    />).toJSON();
    expect(renderer).toMatchSnapshot();
})

