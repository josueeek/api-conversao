
import { Request, Response } from 'express';
import os from 'os';


interface ISettingsCreate {
  chat: boolean;
  username: string;
}

export default class ClassesController{


    async celsius(request: Request, response: Response) {
        const valor:number = await Number(request.params.valor)
        const celsius = (valor - 32) * 5 / 9;

        return response.json({ "celsius": celsius, "maquina": os.hostname() });


    }

    async fahrenheit(request: Request, response: Response) {
        const valor:number = await Number(request.params.valor)
        const fahrenheit = (valor * 9 / 5) + 32;

        return response.json({ "fahrenheit": fahrenheit, "maquina": os.hostname() });


    }

    async fahrenheitparacelsius(request: Request, response: Response) {
        const valor:number = await Number(request.params.valor)
        const celsius = (valor - 32) * 5 / 9;
         return response.json({ "celsius": celsius });


    }


  
}