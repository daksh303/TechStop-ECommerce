import React,{useState,useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import  {Form,Button,Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'


function PaymentScreen() {

    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
  
    const dispatch=useDispatch()

    const navigate=useNavigate()

    const [paymentMethod,setPaymentMethod]=useState('PayTM')

    if(!shippingAddress.address){
        navigate('/shipping')
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        // dispatch(savePaymentMehtod())
        navigate('/placeorder')
    }

  return (
    <FormContainer>
        <CheckOutSteps step1 step2 step3/>

        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as ='legend'>Select Method</Form.Label>
                <Col>
                    <Form.Check
                      type='radio'
                      label='PayTM or CreditCard'
                      id='PayTM'
                      name='paymentMethod'
                      onChange={(e)=>setPaymentMethod(e.target.value)}
                    >

                    </Form.Check>
                </Col>
            </Form.Group>
            <Button type='submit' variant='primary' >
                Continue
            </Button>
        </Form>

    </FormContainer>
  )
}

export default PaymentScreen