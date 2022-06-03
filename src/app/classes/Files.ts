import {SafeUrl} from '@angular/platform-browser'
export class Files{
    Filelist:Array<File>=[];
    addFile() {
        var file:File=new File([""], "", {type: "",});
        this.Filelist.push(file)
    } 
    removeFile(i:number){
        this.Filelist.splice(i,1);
    }
    isValid():boolean{
        for(var file of this.Filelist){
            if(file.name.length==0) return false;
        }
        return true;
    }
    isValidFile(file:File){
        return file.name!=''
    }
    appendFilesToForm(data:FormData){
        this.Filelist.forEach(file=>{
            data.append(file.name,file,file.name)
        })
    }
}

export class DatabaseFile{
    filename:string="وثيقة دراسية";
    filetype:string="pdf";
    size:string="3.2";
}

export class ImageFile{
    file:File=new File([""], "", {type: "",})
    url:SafeUrl=null
}

export interface ImageDimension{
    width:string;
    height:string;
}
