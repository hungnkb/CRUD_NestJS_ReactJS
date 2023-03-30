import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function EditProduct() {
    let currentState = useSelector(state => state.product.product)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: currentState.name,
            category: currentState.category,
            price: currentState.price,
            quantity: currentState.quantity,
            description: currentState.description,
        },
        onSubmit: async values => {
            let updateProduct = await axios.put(
                'http://localhost:8001/api/products',
                {
                    id: currentState._id,
                    name: values.name,
                    category: values.category,
                    quantity: values.quantity,
                    price: values.price,
                    description: values.description,
                }
            )
            if (updateProduct) {
                navigate('/products')
            }
        },
    })
    return (
        <>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input
                            className="form-control"
                            id="category"
                            name="category"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                            rows="3"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            rows="3"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                            onChange={formik.handleChange}
                            value={formik.values.quantity}
                            rows="3"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            rows="3"></input>
                    </div>
                    <Button type="submit" variant="primary">
                        Save Changes
                    </Button>
                </form>
            </div>

        </>
    );
}