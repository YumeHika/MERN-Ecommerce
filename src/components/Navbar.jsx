import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;`

const Wapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Language = styled.span`
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 20px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`
const Logo = styled.h1`
font-weight: bold;
`
const MenuItem = styled.div`
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color:"gray", frontsize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        Tony
                    </Logo>
                </Center>
                <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wapper>
        </Container>
    );
};

export default Navbar;
