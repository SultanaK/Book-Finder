import React from 'react'

const Form = props => (
    <form onSubmit={props.getBook}>
        <input type="text" name="bookName"/>
        <button>Search </button>
    </form>

)
export default Form; 