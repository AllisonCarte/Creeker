import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getSingleUser } from "../../modules/UserManager";

const EditUserType = () => {
    const [user, setUser] = useState({})
    const {id} = useParams();

   const navigate = useNavigate();

   useEffect(
    () => {
        getSingleUser(id).then((u) => {setUser(u)})
    }, []);

    if (!user){
        return null;
    }
console.log(user)

    const handleSetAsAdmin = (e) => {
        e.preventDefault()

        //object to be updated
        const updatedUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            password: user.password,
            createDateTime: user.createDateTime,
            imageLocation: user.imageLocation,
            isActive: user.isActive,
            userTypeId: 2,
            userType: {
                id: user.id,
                name: "Admin"
            },
            fullName: user.fullName

        }


        return fetch(`https://localhost:5001/api/User/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((response) => response.json())
          .then(navigate('/users')
          );
      };

      const handleSetAsMember = (e) => {
        e.preventDefault()
        //object to be updated
        const updatedUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            password: user.password,
            createDateTime: user.createDateTime,
            imageLocation: user.imageLocation,
            isActive: user.isActive,
            userTypeId: 1,
            userType: {
                id: user.id,
                name: "Author"
            },
            fullName: user.fullName

        }


        return fetch(`https://localhost:5001/api/User/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((response) => response.json())
          .then(navigate('/users')
          );
      };

      if (!user){
        return null
      }
    return (
        <div style={{margin: '40px'}}>
            <h4>Edit User Type for {user.userName}?</h4>
            <br></br>
            <div>
                {(user.userTypeId === 1) ?
                <>
                <h5>Status: Member</h5>
                <button onClick={(e) => {
                    handleSetAsAdmin(e)
                }}>Set as Admin</button>
                </>    
                : 
                <>
                <p>Status: Admin</p>
                <button onClick={(e) => {
                    handleSetAsMember(e)
                }}>Set as Member</button>
                </>
            }
            <button style={{marginLeft: '5px'}} onClick={(e) => {
                navigate('/users')
            }}>Cancel</button>
            </div>
        </div>
    )

}

export default EditUserType;