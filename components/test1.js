import React from 'react';
import { Card, CardSubtitle, Button, Alert, ButtonGroup } from 'reactstrap';

class Range extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          selected: [],
          score: []
        };
    }
    
    // selectedClick(e) {
    //     console.log(e.target.value)
    //     this.setState({ selected: e.target.value });
    // }

    selectedClick = (e) => {
      this.setState(state => ({
        selected: e.target.value
      }));
  };
    
    render() {
    
      return (
            <>
            <Card>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Selected (Choose One): {this.state.selected}</CardSubtitle>
                    <ButtonGroup>
                        <Button color="primary" onClick={this.selectedClick.bind(this)} value='0'>0</Button>
                        <Button color="primary" onClick={this.selectedClick.bind(this)} value='1'>1</Button>
                        <Button color="primary" onClick={this.selectedClick.bind(this)} value='2'>2</Button>
                        <Button color="primary" onClick={this.selectedClick.bind(this)} value='3'>3</Button>
                    </ButtonGroup>

                {/* Submit/ */}
                <Button color="primary">Submit</Button>{' '}
            </Card>
          </>
        );
      }
    }

export default Range