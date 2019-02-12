import React from 'react'
import {Form,Label } from 'semantic-ui-react'

const  Textinput =({input,width,type,placeholder,meta:{touched,error}})=> {
  return (
    <Form.Field error ={touched&&!!error}width={width}>
        <input {...input}placeholder={placeholder} type = {type}/>
        {touched && error && <label basic color = 'red'>{error}</label>}
    </Form.Field>
  )
}
export default Textinput