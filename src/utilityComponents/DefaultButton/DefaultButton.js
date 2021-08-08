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
    font-weight: 700;
    text-align: center;
    transition: all 150ms ease-in-out;

    &:hover{
        background-color: hsl(185, 41%, 84%);
        color: hsl(183, 100%, 15%);
    }

    &:focus{
        border: none;
        background-color: #26c0ab;
        color: #00494d;
    }
`;

export default DefaultButton