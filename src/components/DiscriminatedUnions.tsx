type InputType = | {kind: 'button'; props : {label: string, onClick: () => void}} | {kind: 'text'; props :{label: String, placeholder?: string}}

export default function InputTypeInference(propsPar : InputType) {
        switch (propsPar.kind) {
        case  'button' : {
            return (
                <div>
                    <label htmlFor="button">Click</label>
                    <button onClick= {propsPar.props.onClick}>Try</button>
                </div>
            )

}
case 'text' : {

     return (
                <div>
                    <label htmlFor="button">Click</label>
                    <input type="text"placeholder={propsPar.props.placeholder || ''} />
                </div>
            )
}
    }
}