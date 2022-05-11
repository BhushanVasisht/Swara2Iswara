import {Component} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import Home from "../Home";
import axios from "axios";
import {backend_base} from "../../uri";
import CompositionView from "./CompositionView";


class Compositions extends Component {

    state = {
        returnFlag: false,
        items: [{raga: 'Hindola', type: "Kruthi", name: 'Mamawathu Saraswathi'}],
        select: null
    }

    componentDidMount() {

        axios.get(backend_base + "/compositions")
            .then(res => {
                this.setState({items : res.data})
            })
            .catch(err => {
                console.log("Cannot contact backend")
            })
    }

    render() {
        return this.state.select ?
            <CompositionView />
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
                                        <td>{item.name}</td>
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
