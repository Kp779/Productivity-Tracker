import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  btnVal = "ADD";
 task: string = ''
 isSavebtn:boolean=false;
 isAddbtn:boolean =true;
 temp : string ="";
 taskArr: Array<string> =new Array<string>
   constructor(){

  }
  addFunction(){
    this.isAddbtn=true;
    this.taskArr.push(this.task)
    this.task=""
    console.log(this.taskArr);
    
  }
  delete(i: string){
    alert("delete?");
    this.taskArr.forEach((id,index) =>{
      if(id==i){
        this.taskArr.splice(index,1);
      }
    })
    
  }
  edit(i: string){
    this.isSavebtn=true;
    this.isAddbtn=false;
    this.task = i;
    this.temp = i;


  }
  editName(task : string){
    // alert("edit?");
    // var taskFromArray = this.taskArr.filter(x=>x.includes(this.temp));
    const index = this.taskArr.findIndex(x => x.includes(this.temp));
    this.taskArr.splice(index, 1, task);
    this.task="";
    this.isAddbtn=true;
    this.isSavebtn = false;
  }
}
