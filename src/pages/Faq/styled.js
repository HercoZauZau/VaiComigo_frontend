import styled from 'styled-components';

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    font-size: 1.25rem;
  }

  *:focus {
    outline: none;
  }

  body > div {
    width: 90%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  details div {
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 0 0 10px 10px;
    padding: 1.5em;
  }

  details div > * + * {
    margin-top: 1.5em;
  }

  details + details {
    margin-top: 0.5rem;
  }

  summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary {
    border: 2px solid #000;
    border-radius: 10px;
    padding: 0.75em 1em;
    cursor: pointer;
    position: relative;
    padding-left: calc(1.75rem + 0.75rem + 0.75rem);
  }

  details[open] summary {
    background-color: #eee;
    border-radius: 10px 10px 0 0;
  }

  summary:hover {
    background-color: #eee;
  }

  a {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 1px 0 0;
  }

  a:hover {
    box-shadow: 0 3px 0 0;
  }

  code {
    font-family: monospace;
    font-weight: 600;
  }
`;
