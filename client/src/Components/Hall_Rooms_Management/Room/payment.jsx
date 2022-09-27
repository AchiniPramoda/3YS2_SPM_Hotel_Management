
//import statements
import { useEffect, useRef, useState } from "react";
import Modal from 'react-bootstrap/Modal';
//import AlertMsg from '../alert/message';

//create a const  for payment

const Payment = (props) => {
    //declare a const for paypal reservation
    const paypalRef = useRef();

    
    useEffect(() => {
        window.             
            Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: props.desc,
                                amount: {
                                    currency_code: "USD",
                                    value: props.dblAmount,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    props.fnCallBack(order);
                },
                onError: (err) => {
                    //AlertMsg(false, err);
                },
            })
            .render(paypalRef.current);
    }, [props.show]);

    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {
                    <>
                        <div className="row m-0 p-0 justify-content-center">
                            <div className="col-md-12 m-0 p-0 text-center">
                                <span className='font-weight-bold h4'>Payment Section</span>
                                <span className='font-weight-bold h4 text-danger float-right'><i className="fa fa-times-circle" onClick={() => { props.onHide(); }} /></span>
                            </div>
                        </div>
                        <div className="row m-0 p-0 justify-content-center">
                            <div className="col-md-12 m-0 p-0 text-center">
                                <h4 className='font-weight-bold h4'>{ props.desc }</h4>
                            </div>
                            <div className="col-md-12 m-0 mt-2 p-0">
                                <div ref={paypalRef} />
                            </div>
                        </div>
                    </>
                }
            </Modal.Body>
        </Modal>
    )
}

export default Payment;