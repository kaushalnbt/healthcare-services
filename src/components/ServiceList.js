import React from 'react';
import { useService } from '../context/ServiceContext';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import styles from '../App.module.css'; // Import your CSS module

const ServiceList = ({ onEdit }) => {
    const { services, deleteService } = useService();

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            deleteService(index);
        }
    };

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Healthcare Services
            </Typography>
            <List>
                {services.map((service, index) => (
                    <ListItem key={index} className={styles.listItem}>
                        <ListItemText primary={service.name} secondary={`Description: ${service.description}, Price: $${service.price}`} />
                        <Button onClick={() => onEdit(index)} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                            Edit
                        </Button>
                        <Button onClick={() => handleDelete(index)} variant="outlined" color="secondary">
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ServiceList;