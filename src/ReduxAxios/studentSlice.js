import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    data:[],
    loading:true,
    error:null,
}

const fetchStudent=createAsyncThunk( 'student/fetchStudent', async(_,thunkAPI)=>{
    try{
         const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;

    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response.data|| error.message);
      

    }
   
});

const addStudent=createAsyncThunk('student/addStudent',async(newStudent,thunkAPI)=>{
    try{
        const response=await axios.post("https://jsonplaceholder.typicode.com/posts",newStudent)
        return response.data
    }
    catch(error){
  return thunkAPI.rejectWithValue(error.response.data||error.message);
    }
})

 const updateStudent = createAsyncThunk('student/updateStudent', async (updatedStudent,thunkAPI) => {
    try{
const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedStudent.id}`, updatedStudent);
  return response.data;
    }
    catch(error){
        return  thunkAPI.rejectWithValue(error.message);
    }
  
});



const studentSlice=createSlice({
    name:'student',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchStudent.pending,(state)=>{
            state.loading=true;
        })
         .addCase(fetchStudent.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      })
        
        .addCase(fetchStudent.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message;
        })
        .addCase(addStudent.fulfilled,(state,action)=>{
            state.loading=false;
            state.data.push(action.payload);
        })
          .addCase(updateStudent.fulfilled, (state, action) => {
             console.log("Updated student:", action.payload);
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
    }

})
export default studentSlice.reducer;
export {fetchStudent,addStudent,updateStudent};


