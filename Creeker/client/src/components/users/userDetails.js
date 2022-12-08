import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { getSingleUser } from "../../modules/UserManager";

const UserDetails = () => {
    const [User, setUser] = useState({});
    const { id } = useParams();

    const getUser = () => {
        getSingleUser(id).then(u => setUser(u));
    }

useEffect(() => {
    getUser();
}, [])

// Still need to add images back to the return after I figure out why they cause 10000 GET requests

return (
    <>
    <div>
<Card
body
color="dark"
inverse
style={{
    width: '18rem'
}}
>

  <CardBody>
<CardTitle tag="h5">
 {User.userName}
</CardTitle>
<CardSubtitle
 className="mb-2 text-muted"
 tag="h6">
 {User.fullName}
</CardSubtitle>
<CardText>
 {User.email}
 <br></br>
 {User.createDateTime}
</CardText>
  </CardBody>
</Card>
     </div>
    </>
)


}
export default UserDetails;