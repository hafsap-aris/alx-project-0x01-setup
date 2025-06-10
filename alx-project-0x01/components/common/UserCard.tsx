import { UserProps } from '@/interfaces';
import React from 'react';



const UserCard: React.FC<UserProps> = ({ name, address, company }) => {
    return (
        <div style={styles.card as React.CSSProperties}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.bio}>
                {company.name} - {company.catchPhrase}
            </p>
            <p style={styles.bio}>
                {address.street}, {address.city}
            </p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: '16px auto',
        textAlign: 'center',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '12px',
    },
    name: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '8px 0',
    },
    bio: {
        fontSize: '1rem',
        color: '#555',
    },
};

export default UserCard;