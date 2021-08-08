import styled from 'styled-components'

const colorMapping = {
    "light": "#f2f2f2",
    "dark": "#2b2b2b",
    "primary": "#2285e4",
    "danger": "#eb4034",
    "toxic": "#00494d"
}

const determineColor = (field, data) => {
    if(data === undefined){
        switch(field){
            case "background-color":
                return "light"
            case "color":
                return "dark"
        }
    }
    else if(data[0] === "#"){
        return data
    }

    return colorMapping[data]
}

const DefaultButton = styled.button.attrs(({...attrs}) => ({
    ...attrs
}))`
    border: none;
    background-color: ${(props) => determineColor("background-color", props.buttonBg)};
    color: ${(props) => determineColor("color", props.textColor)};
    border-radius: 5px;
    padding: 4px 10px;
    font-weight: 500;
    text-align: center;
`;

export default DefaultButton