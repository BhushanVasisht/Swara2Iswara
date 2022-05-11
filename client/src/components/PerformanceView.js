import axios from  'axios';
import {Card, Container} from "react-bootstrap";
import {backend_base} from "../uri";
import {Component} from "react";


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
                                    <Card
                                        id={item.id}
                                        imgUrl={item.src}
                                        shouldScale={true}
                                    />
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
