import React from 'react';
import MyButton from './MyButton';
import BlankButton from './BlankButton';

class RenderButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {editFieldValue} = this.props;
        let keyNum = 0;
        
        return (this.props.objectToRender.map((element)=>{
            keyNum++;
            if(!element.empty) {
                return <MyButton editFieldValue={editFieldValue} key={keyNum} data={element} />
            } else {
                return <BlankButton key={keyNum}/>
            }
        }));
    }
}

export default RenderButtons;