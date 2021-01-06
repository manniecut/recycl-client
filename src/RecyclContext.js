import React from 'react';

const RecyclContext = React.createContext({
    user: [],
    setUser: () => { },
    logout: () => { }
})

export default RecyclContext