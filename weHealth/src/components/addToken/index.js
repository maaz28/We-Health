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
            downloadLink: ''
        }
    }


    render() {
        return (
            <>
                <Container fluid className="main-content-container px-4 pb-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="ADD TOKEN" subtitle="Component" className="text-sm-left mb-3" />
                    </Row>
                    <Row>
                        <Col>
                            <Paper>
                                <Row>
                                    <Col>
                                        <h5>ADD TOKEN</h5>
                                        <Col lg={5} >
                                            <Input label='Enter Token' />
                                        </Col>
                                        <Col lg={5} >
                                            <Button text='buy' />
                                        </Col>
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