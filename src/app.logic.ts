import { yarg } from "./config/plugins/args.plugin";
import fs from 'fs';

const outputMessage = (base: number, limit: number, showTable: boolean) => {

    let result = '';
    const headerMessage = `============\nTabla del ${base}\n============\n`;
    
    let i = 0;
    while(i<limit){
        let number = i+1;
        result += `${base} x ${number} = ${base*number}\n`;
        i++;
    }
    result = headerMessage + result
    if(showTable) console.log(result);

    return result;
}

const writeFile = (text: string) => {
    const ouputPath = 'outputs';
    fs.mkdirSync(ouputPath, {recursive: true});
    fs.writeFileSync(`${ouputPath}/log.txt`, text);

    console.log('File created!');
}

const {b: base, l: limit, s: showTable} = yarg
writeFile(outputMessage(base, limit, showTable));


