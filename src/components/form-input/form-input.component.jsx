import React from "react"
import {
    Group,
    Input,
    FormInputLabel,
} from "./form-input.styles.jsx"

const FormInput = ({ label, ...otherProps }) => {
    return(
        <Group>
            <Input {...otherProps}/>
            {
                label && (
                    <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
                    // <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
        </Group>
    )
}

export default FormInput