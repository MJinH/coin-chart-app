export const weekOption = () => {
    const date = new Date()
    return [date.getDate(date.setDate(date.getDate() - 6)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate() + 1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate() + 1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate() + 1))]
}


export const monthOption = () => {
    const date = new Date()
    return [date.getDate(date.setDate(date.getDate() - 28)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)), 
        date.getDate(date.setDate(date.getDate()  +1)), 
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1)), date.getDate(date.setDate(date.getDate() + 1)),
        date.getDate(date.setDate(date.getDate()  +1))]
}