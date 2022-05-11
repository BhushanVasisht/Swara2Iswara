import {Container} from "react-bootstrap";
import JanakaView from "./JanakaView";
import JanyaView from "./JanyaView";
const {Component} = require("react");


class RagaView extends Component {

    render() {
        return (
            <Container>
                <Container>
                    <JanakaView />
                </Container>
                <Container>
                    <JanyaView />
                </Container>

            </Container>
        );
    }
}

export default RagaView;
