export interface CreateTableUseCase {
    execute: (options: CreateTableUseOptions) => string;
}

export interface CreateTableUseOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI - Dependency Injection
         */

    ){}

    execute({base, limit = 10}: CreateTableUseOptions){
        let result = '';
        let i = 0;
        while(i<limit){
            let number = i+1;
            result += `${base} x ${number} = ${base*number}\n`;
            i++;
        }
        return result;
    }
}