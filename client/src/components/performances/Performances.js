import axios from  'axios';
import {Button, Card, Container} from "react-bootstrap";
import {Component} from "react";
import PerformanceView from "./PerformanceView";


class Performance extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: this.props.events ? this.props.events : [],
            viewEvent: null
        }
    }

    componentDidMount = async () => {

        await axios.get('/performances/list').then(res => {
            this.setState({events : res.data.data})
        })
            .catch(err => {
                console.log("Cannot contact backend")
            })
    }

    render() {
        if(this.state.viewEvent != null) {
            return <PerformanceView event={this.state.viewEvent} />
        }
        else {
            if (this.state.events.length > 0) {
                let count = 0
                return (
                    <Container>
                        {
                            this.state.events.map(item => {
                                count += 1
                                return (
                                    <Card key={item} className="text-center" style={{ width: '18rem', marginTop: '20px' }}>
                                        {
                                            count === 1 ?
                                                <Card.Header>Featured</Card.Header>
                                                :
                                                <Card.Header/>
                                        }
                                        <Card.Body>
                                            <Card.Title>{item['name']}</Card.Title>
                                            <Card.Text>{item['place'] + ',\n' + item['city']}</Card.Text>
                                            <Button variant="primary" onClick={() => this.setState({viewEvent : item})}>View</Button>
                                        </Card.Body>
                                    </Card>
                                );
                            })
                        }
                    </Container>
                );
            }
            else {
                return <Container>
                    <p>Hang On. Performances coming up here</p>
                </Container>
            }
        }
    }
}

export default Performance;
