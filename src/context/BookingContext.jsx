import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
    return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [prefilledData, setPrefilledData] = useState({
        venueName: '',
        dates: '',
        guests: ''
    });

    const openModal = (data = {}) => {
        setPrefilledData(prev => ({ ...prev, ...data }));
        setIsOpen(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        // Restore body scroll
        document.body.style.overflow = 'unset';
        // Optional: Reset data after a delay to allow animation to finish
        setTimeout(() => {
            setPrefilledData({ venueName: '', dates: '', guests: '' });
        }, 500);
    };

    return (
        <BookingContext.Provider value={{ isOpen, prefilledData, openModal, closeModal }}>
            {children}
        </BookingContext.Provider>
    );
};
