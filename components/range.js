import React from 'react';

class Range extends React.Component {


    constructor(props) {
        super(props);
        this.state = { kg: 0, lb: 0 };
    }
    
    kgClick(e) {
        var newLb = e.target.value * 2.2046;
        this.setState({ kg: e.target.value, lb: newLb });
    }
    
    lbClick(e) {
        var newKg = e.target.value / 2.2046;
        this.setState({ lb: e.target.value, kg: newKg });
    }
    
    render() {
    
      return (
            <div>
                <label> Kg: </label>
                <input type="number" name="Kg" onChange={this.kgClick.bind(this)} value={this.state.kg} />
                <label> Lb: </label>
                <input type="number" name="Lb" onChange={this.lbClick.bind(this)} value={this.state.lb} />
            </div>
        );
      }
    }

export default Range