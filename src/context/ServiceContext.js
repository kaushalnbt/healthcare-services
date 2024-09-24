import React, { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

export const useService = () => {
    return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);

    const addService = (service) => {
        setServices((prev) => [...prev, service]);
    };

    const updateService = (index, updatedService) => {
        setServices((prev) => {
            const newServices = [...prev];
            newServices[index] = updatedService;
            return newServices;
        });
    };

    const deleteService = (index) => {
        setServices((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <ServiceContext.Provider value={{ services, addService, updateService, deleteService }}>
            {children}
        </ServiceContext.Provider>
    );
};
