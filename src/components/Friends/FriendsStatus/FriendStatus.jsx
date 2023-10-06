import styled from 'styled-components'

export const FriendStatus = styled.span `
background-color: ${({isOnline}) => (isOnline ? "green" : "red")}`;

