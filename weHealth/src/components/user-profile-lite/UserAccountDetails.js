import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import Table from '../common/Table'

const UserAccountDetails = (props) => {
  const {firstName,lastName,email,jobTitle,address,qualification,classTeacher,assignedData} = props.data;
  return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Teacher Details</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName"><em>First Name : {firstName}</em></label>
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName"><em>Last Name : {lastName}</em></label>
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail"><em>Email : {email}</em></label>
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="jobTitle"><em>Job Title : {jobTitle}</em></label>
                </Col>
              </Row>
              <FormGroup>
                <label htmlFor="feAddress"><em>Address : {address}</em></label>
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity"><em>Qualification : {qualification}</em></label>
                </Col>
                {/* State */}
                <Col md="6" className="form-group">
                  <label htmlFor="feInputState"><em>Class Teacher : {classTeacher}</em></label>
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col md="12" className="form-group">
                  <Table data={assignedData} />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  )
  };

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
