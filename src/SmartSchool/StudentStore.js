import { action, makeAutoObservable } from "mobx";
import { json } from "react-router-dom";

class Studentstore {
  students = [];
  isAuthenticate =  false;

  constructor() {
    makeAutoObservable(this);

     const savedAuth = localStorage.getItem("isAuthenticate");
  this.setAuthFromStorage(savedAuth);
    const saved = localStorage.getItem("students");
    this.students = saved ? JSON.parse(saved) : [];
  }
   setAuthFromStorage=action((value)=>{
    this.isAuthenticate=JSON.parse(value)||false
   });
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
