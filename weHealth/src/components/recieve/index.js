import React, { Component } from 'react'
import { Container, Row, Col } from "shards-react";
import { Link as RouterLink } from 'react-router-dom'
import ReactExport from "react-data-export";
import Paper from '../common/Paper'
import Input from '../common/InputFullWidth'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import Upload from '../common/UploadButton'
import Dialog from '../common/Dialog'
import { LoginConsumer } from "../../config/contextConfig.js";
import { sendRequest, getRequests } from '../../config/firebase'
import * as firebase from 'firebase'

export default class Recieve extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            downloadLink:''
        }
    }
    componentDidMount() {
        firebase.database().ref('Accepts')
            .on('value', (data) => {
                let userData = data.val()
                let requests = []
                console.log(userData)
                for (let key in userData) {
                    for (let key1 in userData[key]) {
                        requests.push(userData[key][key1])
                    }
                }
                console.log(requests)
                this.setState({ data: requests })
            })

    }

    clicked = (link) => {
        window.location=link
    }


    render() {
        return (
            <>
                <Container fluid className="main-content-container px-4 pb-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="RECIEVED DATA" subtitle="Component" className="text-sm-left mb-3" />
                    </Row>
                    <Row>
                        <Col>
                            <Paper>
                                <Row>
                                    <Col>
                                        <h5>Recieved Data</h5>
                                        {this.state.data.map(item => {
                                            return <Button text='download' isSendUid={item} onClick={this.clicked}  />
                                        })}
                                    </Col>
                                </Row>
                            </Paper>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}