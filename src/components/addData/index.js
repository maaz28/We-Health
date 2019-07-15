import React,{Component} from 'react'
import { Container, Row, Col } from "shards-react";
import ReactExport from "react-data-export";
import Paper from '../common/Paper'
import Input from '../common/InputFullWidth'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'

export default class AddData extends Component{
    constructor(){
        super();
        this.state={
            Glucose:'',
            Bilirubin:'',
            Ketone:'',
            SpecificGravity:'',
            RedCells:'',
            pH:'',
            Protien:'',
            Urobilinogen:'',
            Nitrite:'',
            Leucocytes:'',
            data:[],
            dataSetButtonDisabled:true,
            check:true
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    createDataSet = () => {
        const data=[
                {
                columns: ['Glucose', 'Bilirubin', 'Ketone', 'SpecificGravity', 'RedCells', 'pH', 'Protien', 'Urobilinogen', 'Nitrite', 'Leucocytes'],
                data:[
                        [this.state.Glucose, this.state.Bilirubin, this.state.Ketone, this.state.SpecificGravity, this.state.RedCells, this.state.pH, this.state.Protien, this.state.Urobilinogen, this.state.Nitrite, this.state.Leucocytes]
                    ],
                },
            ]
            this.setState(prevState=>({
                data,
                dataSetButtonDisabled:!prevState.dataSetButtonDisabled,
                check: !prevState.check
            }))
    }

    download = () => {
        console.log('downloaded!')
    }


    render(){
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        const downloadDisplay = this.state.check ? {display:'none'} : {}
        return(
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
                        <Button text='Submit' isDisabled={!this.state.dataSetButtonDisabled} onClick={this.createDataSet} />
                        <ExcelFile filename={`WeHealth-${new Date().getTime().toString()}`} element={<Button style={downloadDisplay} text='Download ExcelSheet' isDisabled={this.state.dataSetButtonDisabled} onClick={this.download}  />}>
                            <ExcelSheet dataSet={this.state.data} name="DiseaseData"  />
                        </ExcelFile>
                    </Paper>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}