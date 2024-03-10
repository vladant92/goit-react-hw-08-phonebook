import styled from 'styled-components';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export const Wrapper = styled.div`
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 25px;
  height: 150px;
  width: 300px;
  border: 1px solid rgb(226, 229, 232);
  border-radius: 12px;
  box-shadow: 10px 10px 5px -7px rgb(164, 164, 164);
  background-color: #f6f8fa;
  /* margin-bottom: 20px; */
`;

export const UserIcon = styled(FaUser)`
  padding: 3px;
  width: 20px;
  height: 20px;
  fill: #fabb18;
  /* border-radius: 12px; */
  background-color: rgba(250, 187, 24, 0.1);
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  padding: 3px;
  width: 20px;
  height: 20px;
  fill: #fabb18;
  /* border-radius: 12px; */
  background-color: rgba(250, 187, 24, 0.1);
`;

export const Button = styled.button`
  /* width: fit-content;
  margin-left:auto;
  margin-right: auto */
`;

