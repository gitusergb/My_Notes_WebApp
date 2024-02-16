import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from "./Login";
import {Signup} from "./Signup";
import {Notes} from "./Notes";
import {CreateNote} from "./CreateNote";
import {UpdateNotes} from "./UpdateNote";
import {Front} from "./Front";

// import {  Redirect } from 'react';

export const MainRoutes = () => {
  return (
    <Routes> 
         <Route path="/" element={<Front />} />;     
      <Route path="/notes" element={<Notes />} />;
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/create" element={< CreateNote/>} />
      <Route path="/update/:noteID" element={< UpdateNotes/>} />
      <Route path="*" element={<div>Page Not Found</div>} /> 
    </Routes>
  );
};