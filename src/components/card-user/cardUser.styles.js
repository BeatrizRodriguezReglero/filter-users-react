import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	border-radius: 0.75rem;
	width: 500px;
	justify-content: space-between;
	padding: 0.5rem;
	margin: 1rem auto;
`;

const StyledImage = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const StyledContainerName = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

const StyledActive = styled.span`
	color: ${({ $color }) => $color};
`;
export { StyledContainer, StyledImage, StyledContainerName, StyledActive };
