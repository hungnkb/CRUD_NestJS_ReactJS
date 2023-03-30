import axios from "axios"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react"
import { CreateProductModal } from "./modal/createModal";
import { CreateProduct } from "./create";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { EditModal } from "./edit";
import { useDispatch } from "react-redux";
import { edit } from "../../features/counter/productSlice";

export const TableProduct = () => {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        let getData = async () => {
            let productList = await axios.get('http://localhost:8001/api/products');
            if (productList.data.length > 0) {
                setProducts(productList.data);
            }
        }
        getData();
    }, [])

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            price: '',
            quantity: '',
            description: '',
        },
        onSubmit: async values => {
            let newProduct = await axios.post(
                'http://localhost:8001/api/products',
                {
                    name: values.name,
                    category: values.category,
                    price: values.price,
                    quantity: values.quantity,
                    description: values.description
                })

            if (newProduct) {
                setShow(false);
                formik.resetForm(
                    {
                        name: '',
                        category: '',
                        price: '',
                        quantity: '',
                        description: '',
                    }
                )
                navigate('/products')
            }
        },
    });
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        console.log(123);
        //     setShow(false);
    }

    return (
        <>
            <div className="container">
                <Button variant="success" onClick={handleShow}>Create</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={formik.handleSubmit}>
                        <Modal.Body>
                            <div className="container">

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


                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>

                {/* <CreateProductModal handleShow={handleShow} handleClose={handleClose}/> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                            {products.length > 0 ? (
                                products.map((p, index) => {
                                    return (
                                      
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{p.name}</td>
                                                <td>{p.category}</td>
                                                <td>{p.quantity}</td>
                                                <td>{p.price}</td>
                                                <td>
                                                    <button onClick={() => {
                                                        dispatch(edit({
                                                            product: p
                                                        }) )
                                                        navigate(`edit/${p._id}`)}} style={{ color: 'white' }} type="button" className="btn btn-info mx-1">Edit</button>
                                                    <button type="button" className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                  

                                    )

                                })
                            ) : <tr><td colSpan='6'>loading...</td></tr>}
                        </>

                    </tbody>
                </table>
            </div>

        </>
    )
}