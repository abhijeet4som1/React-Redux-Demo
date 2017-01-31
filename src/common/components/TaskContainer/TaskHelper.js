/*helper file for models*/

class TaskModel{
  constructor(name:string){
    this.name=name;
    this.createdOn=new Date();
  }
  name:string;
  createdOn:Date;
}

export {
  TaskModel
}
