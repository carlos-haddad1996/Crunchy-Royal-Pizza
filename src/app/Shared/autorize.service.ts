import {Injectable} from '@angular/core'
import { IData } from './data.model';

@Injectable()
export class ClassServiceAuth
{
    currentUser: IData
 
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 2,
            firstname: 'Bruno',
            lastname: 'Mars',
            username: userName,
            password: password,
        }
    }

    ActualizarUsuario(userName: string, Password: string){
        this.currentUser.username = userName;
        this.currentUser.password = Password;
    }

    isAutenticado(){
        return !!this.currentUser;
    }
}

const userData: IData[] =
[
    {
        id: 1,
        firstname: 'Lewis',
        lastname: 'Hamilton',
        username: 'lewis_22',
        password: 'admin'
    }
]

