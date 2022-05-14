import {Component} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import Home from "../../pages/Home";
import axios from "axios";
import { Navigate } from "react-router-dom";


class Compositions extends Component {

    state = {
        returnFlag: false,
        items: [{raga: 'Hindola', type: "Kruthi", name: 'Mamawathu Saraswathi'}],
        select: null
    }

    componentDidMount() {

        axios.get("/compositions")
            .then(res => {
                this.setState({items : res.data})
            })
            .catch(err => {
                console.log("Cannot contact backend")
            })
    }

    render() {
        return this.state.select ?
            <Navigate to='/compositions'/>
            :
            this.state.returnFlag ?
                <Home />
                :
                <Container>
                    <Table striped responsive bordered hover size="sm" style={{marginTop: "30px"}}>
                        <thead>
                        <tr>
                            <th>Raga</th>
                            <th>Type</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.items.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item.raga}</td>
                                        <td>{item.type}</td>
                                        <td><Button onClick={() => this.setState()}>View</Button></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Container>
    }
}

export default Compositions;
