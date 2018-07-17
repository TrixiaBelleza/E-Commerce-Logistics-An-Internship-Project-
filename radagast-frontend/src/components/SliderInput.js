import React, { Component } from 'react';
import { Label, Icon, Grid} from 'semantic-ui-react';
import InputRange from 'react-input-range';

import '../styles/Slider.css';

class SliderInput extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          value: { min: 1075, max: 1325 },
          convertedMin: "10:45 PM",
          convertedMax: "1:15 PM"
        };
    }
    
    convertToTime = (value) => {
        var toConvert = value.toString().padStart(4, "0");
        var tempHour = parseInt(toConvert.slice(0,2), 10);
        var tempMin = parseInt(toConvert.slice(2), 10);
        var tempAPM = " AM";

        if(tempHour > 12) {
            tempHour -= 12;
        }else if(tempHour === 0){
            tempHour = 12;
        }

        switch(tempMin){
            case 25:
                tempMin = "15";
                break;
            case 50:
                tempMin = "30";
                break;
            case 75:
                tempMin = "45";
                break;
            default:
                tempMin = "00"
                break;
        }

        if(value > 1175 && value < 2400){
            tempAPM = " PM"
        }

        toConvert = tempHour + ":" + tempMin + tempAPM;

        return toConvert;
    }

    render(){
        const {value, convertedMin, convertedMax} = this.state;
        return(
            <div className="sliderDiv">
                    {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                    <Grid centered>
                    <Grid.Row>
                    <InputRange
                        maxValue={"2400"}
                        minValue={"0000"}
                        value={value}
                        step={25}
                        draggableTrack
                        onChange={value => {

                            this.setState({ value })

                            this.setState({
                                convertedMin: this.convertToTime(this.state.value.min),
                                convertedMax: this.convertToTime(this.state.value.max)
                            });
                        }}
                        formatLabel={(value,type)=>{
                            if(type === "min"){
                                return <Label color="black" size="large" pointing="above" style={{top: "15px", color: "white"}}>12:00 &nbsp; <Icon fitted name='thumbtack' /> &nbsp;&nbsp;DAY 1</Label>
                            }else if(type === "max"){
                                return <Label color="black" size="large" pointing="above" style={{top: "15px", color: "white"}}>12:00 &nbsp; <Icon fitted name='thumbtack' /> &nbsp;&nbsp;DAY 2</Label>
                            }else{
                                var toConvert = this.convertToTime(value);

                                return <Label circular pointing="below" size="large" style={{transform: "translate(0px,-17px)", backgroundColor: "#1b94ad", color: "white"}}>
                                    {toConvert.slice(0, -3)}
                                    <br/>
                                    {toConvert.slice(-2)}
                                </Label>
                            }
                            
                        }}/>
                        </Grid.Row>
                        <Grid.Row>
                            <Label size="large" style={{transform: "translate(0px,-25px)"}}> <Icon fitted name='clock' /> {convertedMin}-{convertedMax} </Label>
                        </Grid.Row>
                        </Grid>
            </div>
        )
    }
}

export default SliderInput;