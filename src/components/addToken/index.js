import React, { Component } from 'react'
import { Container, Row, Col } from "shards-react";
import { Link as RouterLink } from 'react-router-dom'
import ReactExport from "react-data-export";
import Paper from '../common/Paper'
import Input from '../common/InputFullWidth'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import weHealthController from '../../interface/weHealthController';
import web3 from '../../interface/web3';
import swal from 'sweetalert';
import { LoginConsumer } from '../../config/contextConfig';

//BLOCKCHAIN DEPENDENCIES
// import web3 from '../interface/web3';
// import weHealthController from '../interface/weHealthController';

export default class Recieve extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            downloadLink: '',
            transactionHash : ''
        }
    }

    buyTokens = async (ether, updateBalance) => {
        let that = this;
        try {
            const accounts = await web3.eth.getAccounts();
            await weHealthController.methods
                .buyToken().send({
                    from: accounts[0],
                    value: web3.utils.toWei(ether, 'ether')
                }).on('transactionHash', (hash) => {
                    console.log(hash)
                    that.setState({transactionHash: 'https://rinkeby.etherscan.io/tx/' + hash})
                }).on('confirmation', function (confirmationNumber, receipt) {
                    console.log(confirmationNumber + ' ' + receipt);
                    console.log("Transaction confirmed");
                    that.setState({
                        transactionHash : ''
                    })
                    updateBalance(); // update the balance
                    swal({
                        title: "Transaction Successfull",
                        text: that.state.value * 100 + " Tokens have added to your account.",
                        icon: "success",
                        dangerMode: false,
                    })
                });
        } catch (e) {
            console.log(e);
        }
    };

    tokenHandler = (ev) => {
        this.setState({
            value: ev.target.value
        })
    }

    tokenBuyHandler = (updateBalance) => {
        this.buyTokens(this.state.value, updateBalance)
            .then(res => console.log(res))
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
                                            <Input label='Enter Token' onChange={this.tokenHandler} />
                                        </Col>
                                        <Col lg={5} >
                                            <LoginConsumer>
                                                {({ updateBalance }) => {
                                                    return(
                                                        <Button text='buy' onClick={
                                                            () => { this.tokenBuyHandler(updateBalance)}
                                                            } 
                                                            />
                                                    )
                                                }}
                                                </LoginConsumer>
                                        </Col>
                                        <Col lg={5} >
                                            Track your transaction here <a href={this.state.transactionHash} target="_blank"> {this.state.transactionHash} </a>
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