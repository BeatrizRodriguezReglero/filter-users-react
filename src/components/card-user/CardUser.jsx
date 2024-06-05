

import { StyledActive, StyledContainer, StyledContainerName, StyledImage } from "./cardUser.styles"

const CardUser=({users})=>{
    
    return (
        <>  
        {users.map(user=>(
            <StyledContainer key={user.userId}>
            <StyledImage src={user.profileImage} alt="" />
            <StyledContainerName>
                <span >{user.name}</span>
                <span>@{user.username}</span> 
            </StyledContainerName>
            <StyledActive $color={user.active ? '#3ad63a' : 'red'}>{user.active ? 'Activo' : 'Inactivo'}</StyledActive>
            <button>Ver Detalles</button>

        </StyledContainer>

        ))}
        
        </>

    )
}
export default CardUser