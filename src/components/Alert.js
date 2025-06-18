import React from 'react'

function Alert(props) {
    return (
        <>
            {
                props.alert &&
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    <strong>{props.alert.msg}</strong>
                </div>
            } {/* if props.alert is null then not display above html , using syntax  props.alert && */}
        </>
  )
}

export default Alert
