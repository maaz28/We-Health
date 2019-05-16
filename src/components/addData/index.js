import React,{Component} from 'react'
import { Container, Row, Col } from "shards-react";
import ReactExport from "react-data-export";
import Paper from '../common/Paper'
import Input from '../common/InputFullWidth'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import * as firebase from 'firebase'
import {currentUser} from '../../config/firebase'
import {LoginConsumer} from '../../config/contextConfig'

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
                    name:'Glucose',
                    value: this.state.Glucose
                },
                {
                    name:'Bilirubin',
                    value: this.state.Bilirubin
                },
                {
                    name:'Ketone',
                    value: this.state.Ketone
                },
                {
                    name:'SpecificGravity',
                    value: this.state.SpecificGravity
                },
                {
                    name:'RedCells',
                    value: this.state.RedCells
                },
                {
                    name:'pH',
                    value: this.state.pH
                },
                {
                    name:'Protien',
                    value: this.state.Protien
                },
                {
                    name:'Urobilinogen',
                    value: this.state.Urobilinogen
                },
                {
                    name:'Nitrite',
                    value: this.state.Nitrite
                },
                {
                    name:'Leucocytes',
                    value: this.state.Leucocytes
                },
            ]
            this.setState(prevState=>({
                data,
                dataSetButtonDisabled:!prevState.dataSetButtonDisabled
            }))
    }

    download = () => {
        console.log('downloaded!')
    }

    // componentDidMount(){
    //     this.props.currentUser()
    //     // const data = firebase.auth().currentUser
    //     // console.log(data.uid)
    // }
    

    render(){
        const ExcelFile = ReactExport.ExcelFile;
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
        const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
        return(
            <>
            <LoginConsumer>
                {({gotUid,gotUidFn})=>{
                    if(gotUid){
                        console.log('gotuid ===>',gotUid)
                        const data = firebase.auth().currentUser
                        gotUidFn(data.uid)
                    }
                }}
            </LoginConsumer>
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
                        {/* <div style={{textAlign:'right'}} >
                        <Button text='Submit' />
                        </div> */}
                        <Button text='Submit' isDisabled={!this.state.dataSetButtonDisabled} onClick={this.createDataSet} />
                                <ExcelFile filename={`WeHealth-${new Date().getTime().toString()}`} element={<Button text='Download ExcelSheet' isDisabled={this.state.dataSetButtonDisabled} onClick={this.download}  />}>
                            <ExcelSheet data={this.state.data} name="DiseaseData" >
                                <ExcelColumn label='Test Name' value='name' />
                                <ExcelColumn label='Result' value='value' />
                            </ExcelSheet>
                        </ExcelFile>
                    </Paper>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}