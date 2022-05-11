import {Component} from 'react';
import {Container} from "react-bootstrap";
import Compositions from "./Compositions";


class CompositionView extends Component {

    state = {
        returnFlag: false
    }

    render() {
        return this.state.returnFlag ?
            <Compositions />
            :
            <Container>
                <p>Composition Type</p>
                <p>Composition Name</p>
                <p>Vaggeykara: XYZ</p>
            </Container>
    }
}

export default CompositionView;
