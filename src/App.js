import React, { useState } from 'react';
import { ServiceProvider } from './context/ServiceContext';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import './App.module.css';

const App = () => {
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleCancel = () => {
        setEditingIndex(null);
    };

    return (
        <ServiceProvider>
            <div>
                <h1>Healthcare Service Manager</h1>
                <ServiceForm editingIndex={editingIndex} onCancel={handleCancel} />
                <ServiceList onEdit={handleEdit} />
            </div>
        </ServiceProvider>
    );
};

export default App;