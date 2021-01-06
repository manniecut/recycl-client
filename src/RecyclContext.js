import React from 'react';

const RecyclContext = React.createContext({
    user: [],
    setUser: () => { },
    logout: () => { },
    updateUser: () => { }
})

export default RecyclContext