const incrementNumber = (num) => {
    return{
        type : 'INCREMENT',
        payload : num
    }
}

const decrementNumber = (num) => {
    return{
        type : 'DECREMENT',
        payload : num
    }
}

export {incrementNumber, decrementNumber}