import {Badge, Container, Table} from "react-bootstrap";
import axios from "axios";
const {Component} = require("react");

class RagaView extends Component {

    state = {
        janaka: [],
        janya: []
    }

    componentDidMount = async () => {

        await axios.get("/ragas/list")
            .then(res => {
                //console.log(res.data)
                this.setState({janaka : res.data.janaka, janya : res.data.janya})
            })
            .catch(err => {
                console.log("Cannot contact backend")
            })
    }

    render() {
        console.log(this.state)
        return (
            <Container className={"text-center"}>
                <h1><Badge bg="warning">Janaka Ragas</Badge></h1>
                <Table bordered style={{ height: '250px'}}>
                    <thead>
                        <tr>
                            <th>Raga</th>
                            <th>Melakarta</th>
                            <th>Arohana</th>
                            <th>Avarohana</th>
                            <th>Scale Demo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.janaka.map(item => {
                                return (
                                    <tr key={item['melakarta']}>
                                        <td>{item.name}</td>
                                        <td>{item['melakarta']}</td>
                                        <td>{item['aro_avro'][0]}</td>
                                        <td>{item['aro_avro'][1]}</td>
                                        <audio controls>
                                            <source src={item['aro_avro_src']} type="audio/mp3"/>
                                        </audio>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

                <h1><Badge bg="warning">Janya Ragas</Badge></h1>
                <Table bordered style={{ height: '250px'}}>
                    <thead>
                        <tr>
                            <th>Raga</th>
                            <th>Parent Raga</th>
                            <th>Parent Melakarta</th>
                            <th>Arohana</th>
                            <th>Avarohana</th>
                            <th>Scale Demo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.janya.map(item => {
                                return (
                                    <tr key={item['melakarta']}>
                                        <td>{item.name}</td>
                                        <td>{item['janaka']}</td>
                                        <td>{item['janaka_melakarta']}</td>
                                        <td>{item['aro_avro'][0]}</td>
                                        <td>{item['aro_avro'][1]}</td>
                                        <audio controls>
                                            <source src={item['aro_avro_src']} type="audio/mp3"/>
                                        </audio>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </Container>
        );
    }
}

export default RagaView;
