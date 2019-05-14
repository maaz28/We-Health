import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

export default class UserProfileLite extends React.Component {
  constructor(){
    super();
    this.state={
      data:{
        firstName:'Sierra',
        lastName:'Brooks',
        email:'sierra@example.com',
        jobTitle:'Teacher',
        address:'1234 Main St.',
        qualification:'Bechlors',
        classTeacher:'3rd year',
        assignedData: [
          {
            class:'3rd year',
            subject:['English','Maths','Physics']
          }
        ]
      }
    }
  }

  render(){
  return(
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetails />
      </Col>
      <Col lg="8">
        <UserAccountDetails data={this.state.data} />
      </Col>
    </Row>
  </Container>
);
}
}

