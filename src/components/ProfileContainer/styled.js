import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';

export const Main = styled.div`
  margin: 100px auto;
  text-align: center;

  .profileCont {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    text-align: center;
    padding: 15px 0 0 0;
    width: 180px;
    height: fit-content;
    border-radius: 10px;
    display: inline-block;
    margin: 10px;
    background: #fff;
  }
`;

export const ProfileLink = styled(Link)`
  user-select: none;
  color: #000000;
  text-decoration: none;

  span {
    display: block;
    word-wrap: break-word;

    &:first-of-type {
      text-transform: capitalize;
      font-weight: bold;
      margin-top: 8px;
    }
  }

  .italic {
    font-style: italic;
  }

  .profileData {
    background-color: rgba(0, 0, 0, 0.2);
    margin: 10px 0 0 0;
    border-radius: 0 0 10px 10px;
    padding: 10px 20px;
    text-align: left;

    .location {
      display: flex;
      align-items: center;
      justify-content: left;
      margin: 8px 0 10px 0;
      font-size: 0.8em;
      font-weight: normal;

      p {
        margin-left: 3px;
      }
    }
  }

  .rating {
    margin-top: 10px;
    color: ${colors.primaryColor};

    img,
    svg {
      width: 12px;
      height: 12px;
      margin-bottom: 1px;
      margin-right: 1px;
    }

    p {
      display: inline-block;
      margin-right: 6px;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .FaUserCircle {
    width: 110px;
    height: 110px;
    color: #000000;
  }
`;
