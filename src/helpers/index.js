import titleize from 'titleize';

export const rentalType = isShared =>{
    return isShared ? 'Shared' :'Whole'
}
export  const toUpperCase = Title =>{
    return Title ? titleize(Title) :""
} 