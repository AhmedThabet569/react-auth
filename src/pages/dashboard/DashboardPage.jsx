import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../utils/firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import  DeleteIcon  from '@mui/icons-material/Delete';
const DashboardPage = () => {
    const navigate = useNavigate();

    const handelAddUser = () => { 
       navigate('/user');
    }
    const handelLogout = async () =>{
      try {
        await signOut(auth);
        navigate('/login');
      } catch (error) {
          console.log(error.message);
      }
    }

   
    const handleDelete = async (id) =>{
        try {
          await deleteDoc(doc(db, "users", id));
          fetchUsers();
        } catch (error) {
            console.log(error.message);
        }
      }
    const handleUpdate = async(id) => {
       navigate(`/user/${id}/edit`);
    }

    const [users,setUsers]= useState([]);
    const fetchUsers = async () => {
       const response =   await getDocs(collection(db, "users"));
        const userList = response.docs.map((doc)=>({  id:doc.id,...doc.data()})); 
        console.log(userList);
        
        setUsers(userList);
    }
    useEffect(() => {
      
        fetchUsers();
      
    }, [])
    
  return (
     <TableContainer component={Paper}>
           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:2 }}>
               <Button variant="contained" color="success" onClick={handelAddUser}>
                <AddIcon />
                Add User</Button>
                <Button variant="outlined" color="secondary" onClick={handelLogout}>
                 <LogoutIcon />
                 Logout</Button>
                
            </Box>
               <Table>
                  <TableHead>
                      <TableRow>
                        <TableCell>firstname</TableCell>
                        <TableCell>lastname</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {users.length ===  0 ? (
                        <TableRow>
                            <TableCell colSpan={5} style={{ textAlign:'center' }}>No Users</TableCell>
                        </TableRow>
                      ): (
                         users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.firstname}</TableCell>
                                <TableCell>{user.lastname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={()=> handleUpdate(user.id)}>
                                        <EditIcon />
                                        </Button>
                                    <Button variant="contained" color="error"onClick={()=> handleDelete(user.id)} sx={{ marginLeft:5 }}>    
                                        {/* <DeleteIcon />
                                         */}
                                         <DeleteIcon />
                                        </Button>
                                </TableCell>
                            </TableRow>
                         )
                         )
                        )}
                  </TableBody>
               </Table>
        </TableContainer>
  )
}

export default DashboardPage