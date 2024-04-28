import {Component} from 'react'
import "./index.css"

class SimpleIntrest extends Component{
    state = {
        principle: '',
        intreast: '',
        tenure: '',
        simpleIntrest: ''
    }
    changePrinciple = event => {
        this.setState({principle: event.target.value})
    }
    changeIntrest = event => {
        this.setState({intreast: event.target.value})
    }
    changeTenure = event => {
        this.setState({tenure: event.target.value})
    }
    calculate = event => {
        event.preventDefault();
        const {principle, intreast, tenure} = this.state
        let si = principle*tenure*intreast/100
        this.setState({simpleIntrest: si})
    }

    render(){
        const {principle, intreast, tenure, simpleIntrest} = this.state
        return(
            <div className="container-element">
                <form type="submit" onSubmit={this.calculate} className='form-element'>
                    <div className='input-container'>
                        <input type="text" id="principle" onChange={this.changePrinciple} value={principle}/>
                        <label for="principle">Principle Amount</label>
                    </div>
                    <div className='input-container'>
                        <input type="text" id="intrest" onChange={this.changeIntrest} value={intreast}/>
                        <label for="intrest">Intrest Rate</label>
                    </div>
                    <div className='input-container'>
                        <input type="text" id="tenure" onChange={this.changeTenure} value={tenure}/>
                        <label for="tenure">tenure</label>
                    </div>
                    <h1 className='final-answer-heading'>{simpleIntrest}</h1>
                    <div className='button-container'>
                      <button type="submit" className='button'>Calculate</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SimpleIntrest