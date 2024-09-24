import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useService } from '../context/ServiceContext';
import styles from '../App.module.css'; // Import your CSS module

const ServiceForm = ({ editingIndex, initialData, onCancel }) => {
    const { addService, updateService } = useService();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        price: Yup.number().required('Price is required').positive('Price must be positive'),
    });

    const handleSubmit = (values, { resetForm }) => {
        if (editingIndex !== null) {
            updateService(editingIndex, values);
        } else {
            addService(values);
        }
        resetForm(); // Clear the input fields
        onCancel();
    };

    return (
        <Container maxWidth="sm" className={styles.container}>
            <Typography variant="h4" className={styles.header}>
                {editingIndex !== null ? 'Edit Service' : 'Add Service'}
            </Typography>
            <div className={styles.form}>
                <Formik
                    initialValues={initialData || { name: '', description: '', price: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, values }) => (
                        <Form>
                            <TextField
                                className={styles.inputField}
                                fullWidth
                                label="Name"
                                variant="outlined"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <TextField
                                className={styles.inputField}
                                fullWidth
                                label="Description"
                                variant="outlined"
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            <TextField
                                className={styles.inputField}
                                fullWidth
                                label="Price"
                                variant="outlined"
                                type="number"
                                name="price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth className={styles.button}>
                                Submit
                            </Button>
                            <Button type="button" variant="outlined" color="secondary" fullWidth className={styles.button} onClick={onCancel}>
                                Cancel
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default ServiceForm;