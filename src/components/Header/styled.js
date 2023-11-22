import styled from 'styled-components';

export const UserStatus = styled.div`
  color: #fff;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  text-transform: capitalize;

  div {
    width: 10px;
    height: 10px;
    background-color: #66ff99;
    border-radius: 50%;
    position: relative;
    right: -10px;
    bottom: 1px;
  }
`;

export const Navbar = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -65px;
  font-weight: bold;

  .editpen {
    text-transform: capitalize;

    &:hover {
      color: #333;
    }

    svg {
      margin-left: 10px;
    }
  }

  .white {
    color: #fff;

    &:hover {
      color: red;
    }
  }

  .nav {
    height: 60px;
    width: 100%;
    background-color: transparent;
    position: relative;
    padding: 10px 2% 10px 4%;
    color: #fff;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    padding: 10px 10px 10px 10px;
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;

    span {
      margin-right: 40px;
    }
  }

  .nav > .nav-links > a,
  .nolink {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
  }

  .nav > .nav-links > a:hover {
    /* background-color: rgba(0, 0, 0, 0.3); */
    color: #333;
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 800px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
    }
    .nav > .nav-btn > label:hover,
    .nav #nav-check:checked ~ .nav-btn > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }

    .nav,
    .nav > .nav-links {
      background-color: #333;
    }

    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
    }
    .nav > .nav-links > a {
      display: block;
      width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
`;
