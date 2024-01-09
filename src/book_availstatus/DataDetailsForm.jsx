import React from 'react'
import './/DataDetailsForm.css'
import {FormGroup,FormControl,InputLabel,Input,Button,makeStyles} from "@material-ui/core";
const useStyle = makeStyles({
    formStyle:{
        width:'50%',
        margin:'auto',
        padding:30,
        border:'2px solid black',
        paddingTop:20,
        borderRadius:'2%',

        boxShadow:"0px 0px 10px rgba(1,0,0,0.5)",

    },
    mybtn:{
        marginTop:10,
        width:'10%'
    },
    formInputs:{
        margin:10,
    }

})
function DataDetailsForm() {
    const classes = useStyle();
    return (

    <div className='form-container'> 
               <h1>Book Details Form</h1> 
        <FormGroup className={classes.formStyle}>
            <FormControl className={classes.formInputs}>
                <InputLabel>Book Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl className={classes.formInputs}>
                <InputLabel>Book Author</InputLabel>
                <Input/>
            </FormControl>
            <FormControl className={classes.formInputs}>
                <InputLabel>Book Description</InputLabel>
                <Input/>
            </FormControl>
            <FormControl className={classes.formInputs}>
                <InputLabel>Issued</InputLabel>
                <Input/>
            </FormControl>
            <FormControl className={classes.formInputs}>
                <InputLabel>Copies</InputLabel>
                <Input/>
            </FormControl>
            <Button variant="contained" color="primary" className={classes.mybtn}>Send</Button>
        </FormGroup>
    </div>
  )
}

export default DataDetailsForm