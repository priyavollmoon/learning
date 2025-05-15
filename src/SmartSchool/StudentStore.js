import { action, makeAutoObservable, observable } from "mobx";
import { json } from "react-router-dom";

class Studentstore {
  students = [];
  isAuthenticate =  false;

  constructor() {
    makeAutoObservable(this,{
  
      login:true,
      logOut:true,
      addStudent:true,
      removeStudent:true,
    });

   const savedAuth = localStorage.getItem("isAuthenticate");
  this.isAuthenticate=savedAuth === "true";
    const saved = localStorage.getItem("students");
    this.students = saved ? JSON.parse(saved) : [];
  }
   
  login() {
    this.isAuthenticate = true;
    localStorage.setItem("isAuthenticate", JSON.stringify(true));
  }
  logOut() {
    this.isAuthenticate = false;
    localStorage.setItem("isAuthenticate",JSON.stringify(false));
  }
  addStudent(name, id) {
    this.students.push({ name, id });
    localStorage.setItem("students", JSON.stringify(this.students));
  }
  removeStudent(id) {
    this.students = this.students.filter((s) => s.id !== id);
     localStorage.setItem("students", JSON.stringify(this.students));
     console.log("remove",this.students);
  }
}
const studentStore = new Studentstore();
export default studentStore;
