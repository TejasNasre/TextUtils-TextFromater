import React from 'react'
import PropTypes from 'prop-types'

const capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toLowerCase() + lower.slice(1);
}
export default function Alert(props) {
  return (
    <>
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
</div>}
</div>
</>

  )
}
