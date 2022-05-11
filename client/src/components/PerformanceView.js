import axios from  'axios';
import {Container} from "react-bootstrap";
import {backend_base} from "../uri";

const {Component} = require("react");


class Performance extends Component {

    state = {
        events: []
    }


    componentDidMount() {

        axios.get(backend_base + "/performances")
            .then(res => {
                this.setState({events : res.data})
            })
            .catch(err => {
                console.log("Cannot contact backend")
            })
    }

    render() {
        return (
            <Container>
                {
                    this.state.events ?
                        this.state.events.map( (item) => {
                            return (
                                <div key={item.id}>
                                    <p>item.name</p>
                                </div>
                            )
                        })
                        :
                        <div>
                            <p>Hang On. Performance videos coming up here...</p>
                        </div>
                }
            </Container>
        );
    }
}

export default Performance;
