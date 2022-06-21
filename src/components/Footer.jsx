import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Phone,
  MyLocation,
  MailOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "fff8f8" })}
`;

const Contactitem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MUMTAJ.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ullam,
          aut, odio vitae magni molestiae ut veniam quia laboriosam officiis,
          porro repellendus ea ducimus quo vel cumque commodi itaque expedita.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Main Fashion</Listitem>
          <Listitem>Women Fashion</Listitem>
          <Listitem>Accessoris</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contactitem>
          <MyLocation style={{ marginRight: "10px" }} />
          422 Dixit Patna: South GB Road....
        </Contactitem>
        <Contactitem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56 78
        </Contactitem>
        <Contactitem>
          <MailOutline style={{ marginRight: "10px" }} />
          Contact@mmumtajalam987@gamil.com
        </Contactitem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
