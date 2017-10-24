import { OriginalAddressInfoPojo } from '../models/address-infopojo';
import * as fs from 'fs';

export  class FileUtils{

    public static callProgram(){
        var child = require('child_process').execFile;
        var executablePath = "C:\\test\\FileCopier.exe";
        var parameters = ["c:\\test\test.txt"];
       
        
        child(executablePath, function(err:any, data:any) {
             console.log(err)
             console.log(data.toString());
        });       
    }

    public static createInputFile(name:string,address : string ){
        console.log("Inside crateInputFile, name: " + name +  " AND address: " + address);
        let addressString =  name + "|" + address; 
        fs.writeFile("c:\\test\\text.txt",addressString,function(err){
            if(err)
            {
                console.log("there was an error writing file");
            }
            else
            {
                console.log("file was created successfully");
            }
        }) ;   
    }
}


