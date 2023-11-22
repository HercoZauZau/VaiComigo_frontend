import styled from 'styled-components';
// import colors from '../../config/colors';

export const Main = styled.div`
  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to left, #2bc0e4, #eaecc6);
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #2bc0e4;
    }
  }

  .menu-checkbox {
    display: none;
  }

  .menu {
    position: relative;
  }

  .menu-dots {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    box-shadow: 0 0 0 0.3rem #161e3f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotate(90deg);
    transition: 0.3s;
    cursor: pointer;
  }

  .menu-dots:hover {
    box-shadow: 0 0 0 0.3rem #161e3f, 0 0 0 1rem rgba(#161e3f, 0.16);
    transform: scale(1.2) rotate(90deg);
  }

  .menu-dot {
    width: 0.45rem;
    height: 0.45rem;
    background-color: #161e3f;
    border-radius: 50%;
  }

  .menu-dot + .menu-dot {
    margin-top: 0.3rem;
  }

  .menu-items {
    position: absolute;
    top: -2.3rem;
    left: -2.2rem;
    width: 9.4rem;
    height: 11rem;
    color: #fff;
    pointer-events: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    opacity: 0;
    transition: 0.3s;
  }

  .menu-item {
    transform: scale(0.5);
    filter: blur(10px);
    transition: 0.3s;
  }

  .menu-item:nth-child(odd) {
    text-align: right;
  }

  .menu-item:nth-child(even) {
    text-align: left;
  }

  .menu-item:first-child,
  .menu-item:last-child {
    grid-column: span 2;
    text-align: center;
  }

  .menu-checkbox:checked + .menu > .menu-dots {
    transform: none;
    box-shadow: 0 0 0 3.4rem #161e3f;
  }

  .menu-checkbox:checked + .menu > .menu-items {
    opacity: 1;
    pointer-events: auto;
  }

  .menu-closer-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item {
    opacity: 1;
    transform: none;
    filter: none;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(1) {
    transition-delay: 0.05s;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(2) {
    transition-delay: 0.1s;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(3) {
    transition-delay: 0.15s;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(4) {
    transition-delay: 0.2s;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(5) {
    transition-delay: 0.25s;
  }

  .menu-checkbox:checked + .menu > .menu-items > .menu-item:nth-child(6) {
    transition-delay: 0.3s;
  }

  .menu-checkbox:checked + .menu > .menu-closer-overlay {
    pointer-events: auto;
    cursor: pointer;
  }

  position: fixed;
  top: 200px;
  left: 10%;
`;
