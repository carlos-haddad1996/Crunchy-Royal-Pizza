import { Injectable } from '@angular/core';
 
 


export interface IUser
{
    id: number,
    firstName: string,
    lastName: string,
    userName: string
}

export class AuthService
{
    currentUser: IUser
 
    loginUser(userName: string, password: string){
        this.currentUser = {
            firstName: 'Lewis',
            lastName: 'Hamilton',
            id : 1,
            userName : userName
        }
    }

    ActualizarUsuario(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
 
    isAutenticado(){
        return !!this.currentUser;
    }
}