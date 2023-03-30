import React from 'react';
import { Formik } from 'formik';

export const CreateProduct = () => {

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Category</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Price</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Category</label>
                    <input className="form-control" id="exampleFormControlTextarea1" rows="3"></input>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Save changes</button>
                </div>
            </div>

        </>
    )

};