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
import Table from '../common/Table'
import { LoginConsumer } from "../../config/contextConfig.js";
import { sendRequest, getRequests } from '../../config/firebase'
import * as firebase from 'firebase'

export default class Recieve extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            downloadLink: '',
            gotContext: true,
            uid: '',
            count: 0
        }
    }
    componentDidMount() {
        let uid = sessionStorage.getItem('uid')
        firebase.database().ref('Accepts').child(uid)
            .on('value', (data) => {
                let userData = data.val()
                let requests = []
                let count = 0;
                for (let key in userData) { //loop
                    count++
                    console.log('userData[key] ===>', userData[key])
                    requests.push(userData[key])
                }
                console.log('requests ===>', requests);
                const res = [
                    {
                        columns: ['Glucose', 'Bilirubin', 'Ketone', 'SpecificGravity', 'RedCells', 'pH', 'Protien', 'Urobilinogen', 'Nitrite', 'Leucocytes'],
                        data: [...requests],
                    },
                ]
                console.log('res ===>', res)
                this.setState({ data: res, count })
            })

    }

    clicked = (link) => {
        window.location = link
    }


    render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
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
                                        <Row>
                                            <Col lg={8} >
                                                <h6 style={{ textAlign: 'center',marginTop:10 }} >{this.state.count} data recieved</h6>
                                            </Col>
                                            <Col lg={4} >
                                                {/* {this.state.data ? (<Table data={this.state.data} buttonText='download' onClick={this.clicked} />) : ('')} */}
                                                {this.state.count ?
                                                    <ExcelFile filename={`WeHealth-Recieve-${new Date().getTime().toString()}`} element={<Button text='Download Data' onClick={() => console.log('downloaded')} />}>
                                                        <ExcelSheet dataSet={this.state.data} name="DiseaseData" />
                                                    </ExcelFile> : ''}
                                            </Col>
                                        </Row>
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