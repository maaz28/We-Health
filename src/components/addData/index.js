import React, { Component } from 'react'
import { Container, Row, Col } from "shards-react";
import ReactExport from "react-data-export";
import Paper from '../common/Paper'
import Input from '../common/InputFullWidth'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import Web3 from 'web3';
import { post_request } from '../../utils/helper';
import swal from 'sweetalert';
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@material-ui/core';

export default class AddData extends Component {
    constructor() {
        super();
        this.state = {
            Glucose: '',
            Bilirubin: '',
            Ketone: '',
            SpecificGravity: '',
            RedCells: '',
            pH: '',
            Protien: '',
            Urobilinogen: '',
            Nitrite: '',
            Leucocytes: '',
            disease: '',
            data: [],
            dataSetButtonDisabled: true,
            check: true
        }
    }

    async componentDidMount() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed

            } catch (error) {
                // User denied account access...
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            window.web3 = new Web3(this.web3.currentProvider);
        }
        // Non-dapp browsers...
        else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    createDataSet = () => {
        const data = [
            {
                columns: ['Glucose', 'Bilirubin', 'Ketone', 'SpecificGravity', 'RedCells', 'pH', 'Protien', 'Urobilinogen', 'Nitrite', 'Leucocytes', 'disease'],
                data: [
                    [this.state.Glucose, this.state.Bilirubin, this.state.Ketone, this.state.SpecificGravity, this.state.RedCells, this.state.pH, this.state.Protien, this.state.Urobilinogen, this.state.Nitrite, this.state.Leucocytes, this.state.disease]
                ],
            },
        ]
        this.setState(prevState => ({
            data,
            dataSetButtonDisabled: !prevState.dataSetButtonDisabled,
            check: !prevState.check
        }))
    }

    download = () => {
        console.log('downloaded!')
    }

    prediction = () => {
        let obj = this.state;
        delete obj.data;
        delete obj.dataSetButtonDisabled;
        delete obj.check;
        delete obj.disease;
        post_request('https://wehealth-server.herokuapp.com/result', obj).then((res) => {
            console.log(res.class);
            swal({
                // title: "",
                text: "We hope you're all well, But report predicts you may have " + res.class + " disease",
                icon: "warning",
                dangerMode: true,
            })
            // else {
            //     swal({
            //         title: "Great",
            //         text: "You're all fit Dear.",
            //         dangerMode: false,
            //     })
            // }
        })
    }


    render() {
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        const downloadDisplay = this.state.check ? { display: 'none' } : {}
        return (
            <>
                <Container fluid className="main-content-container px-4 pb-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="Add Data" subtitle="Component" className="text-sm-left mb-3" />
                    </Row>
                    <Row>
                        <Col>
                            <Paper>
                                <h5>Enter Details</h5>
                                <Row>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Glucose} name='Glucose' label='Glucose' />
                                    </Col>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Bilirubin} name='Bilirubin' label='Bilirubin' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Ketone} name='Ketone' label='Ketone' />
                                    </Col>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.SpecificGravity} name='SpecificGravity' label='Specific Gravity' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.RedCells} name='RedCells' label='Red Cells' />
                                    </Col>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.pH} name='pH' label='pH' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Protien} name='Protien' label='Protien' />
                                    </Col>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Urobilinogen} name='Urobilinogen' label='Urobilinogen' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Nitrite} name='Nitrite' label='Nitrite' />
                                    </Col>
                                    <Col lg='6' >
                                        <Input onChange={this.handleChange} value={this.state.Leucocytes} name='Leucocytes' label='Leucocytes' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' >
                                        <FormControl variant="outlined">
                                            <InputLabel htmlFor="outlined-age-simple">
                                                Disease
                                            </InputLabel>
                                            <Select
                                                value={this.state.disease}
                                                onChange={this.handleChange}
                                                input={<OutlinedInput name="disease" id="outlined-age-simple" />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={"kidney"}>Kindney</MenuItem>
                                                <MenuItem value={"liver"}>Liver</MenuItem>
                                                <MenuItem value={"diabetes"}>Diabetes</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Row>
                                <Button text='Submit' isDisabled={!this.state.dataSetButtonDisabled} onClick={this.createDataSet} />
                                <ExcelFile filename={`WeHealth-${new Date().getTime().toString()}`} element={<Button style={downloadDisplay} text='Download ExcelSheet' isDisabled={this.state.dataSetButtonDisabled} onClick={this.download} />}>
                                    <ExcelSheet dataSet={this.state.data} name="DiseaseData" />
                                </ExcelFile>
                                <Button text='Prediction' isDisabled={this.state.dataSetButtonDisabled} onClick={this.prediction} />
                            </Paper>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}