import {Button, Card} from "react-bootstrap";
import {Component} from "react";
import { Redirect } from "react-router";

class PerformanceView extends Component {

    state = {
        goBack: false
    }


    render() {
        if(this.state.goBack) {
            <Redirect to="/performances" />
        }
        else {
            const item = this.props.event

            return (
                <Card className="text-center" key={item.name} style={{ marginTop: '30px' }}>
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={item['file_src']}
                            frameBorder="0"
                            allow="autoplay"
                            allowFullScreen
                            title={item.name}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title>{item['name']}</Card.Title>
                        <Card.Text>{item['place'] + ',\n' + item['city']}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => this.setState({goBack: true})}>Go Back</Button>
                    </Card.Footer>
                </Card>
            );
        }

    }


}

export default PerformanceView;
