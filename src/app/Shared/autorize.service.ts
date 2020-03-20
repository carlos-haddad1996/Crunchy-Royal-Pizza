import {Injectable} from '@angular/core'
import { IData, IPizza, ICheck } from './data.model';

@Injectable()
export class ClassServiceAuth
{

    //function related to login and verification
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

    //function related to pizza display

    getPizzaList()
    {
        return pizzaMenu;
    } 
    
    getCheckOut()
    {
        return checkArray;
    } 

    objeto: any;

    getCreateProductValues(id: string, name: string, description: string, price: string, imagen: string){
        this.objeto = {id: id, name: name, description: description, price: price,image: imagen};
        pizzaMenu.push(this.objeto);
        //console.log(pizzaMenu);
    }  

    objeto1: any;

    getCreateCheckOut(id: string, name: string, price: string){
        this.objeto1 = {id: id, name: name, price: price};
        checkArray.push(this.objeto1);
        //console.log(pizzaMenu);
    }  

    getPizzaById(id:number){
        return pizzaMenu.find(clases => clases.id === id);
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


const checkArray: ICheck[] =
[
    {
        id: 999,
        name: 'Demo',
        price: 'Lps 0.00'
    }
]

const pizzaMenu: IPizza[] = 
[
    {
        id:100,
        name: 'Boston Pizza',
        description: 'NONE',
        price: 'Lps. 210',
        image: 'https://greenwich-pizza-cdn.tillster.com/6fa30d87-fb0c-47ac-ab47-0fa59d59ade0.png'
    },
    {
        id:101,
        name: 'Suprema',
        description: 'NONE',
        price: 'Lps. 175',
        image: 'https://greenwich-pizza-cdn.tillster.com/4ab3c835-2bd7-492f-a1c9-867d10e649f8.png'
    },
    {
        id:102,
        name: 'California Style',
        description: 'NONE',
        price: 'Lps. 140',
        image: 'https://greenwich-pizza-cdn.tillster.com/a5818942-f3f8-407c-b96a-ffe94cc1e9df.png'
    },
    {
        id:103,
        name: 'Pepperoni',
        description: 'NONE',
        price: 'Lps. 100',
        image: 'https://www.customercaremc.com/wp-content/uploads/2017/03/pizza.png'
    },
    {
        id:104,
        name: 'Tres Carne',
        description: 'NONE',
        price: 'Lps. 205',
        image: 'https://greenwich-pizza-cdn.tillster.com/6b092509-fe69-4bcb-8786-236d5acc4301.png'
    }
]

