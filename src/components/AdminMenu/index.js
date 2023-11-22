/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import {
  BsFillPersonPlusFill,
  BsImage,
  BsCalendarDate,
  BsTrash,
  BsExclamationCircle,
} from 'react-icons/bs';

import { Main } from './styled';

export default function AdminMenu() {
  return (
    <Main>
      <input className="menu-checkbox" id="menu" type="checkbox" name="menu" />
      <nav className="menu">
        <label className="menu-dots" htmlFor="menu">
          <span className="menu-dot" />
          <span className="menu-dot" />
          <span className="menu-dot" />
        </label>
        <ul className="menu-items">
          <li className="menu-item">
            <a href="your_user_icon_link_here">
              <AiOutlinePlus />
            </a>
          </li>
          <li className="menu-item">
            <a href="your_user_icon_link_here">
              <BsFillPersonPlusFill />
            </a>
          </li>
          <li className="menu-item">
            <a href="/destinoCRUD">
              <BsImage />
            </a>
          </li>
          <li className="menu-item">
            <a href="your_user_icon_link_here">
              <BsCalendarDate />
            </a>
          </li>
          <li className="menu-item">
            <a href="your_user_icon_link_here">
              <BsExclamationCircle />
            </a>
          </li>
          <li className="menu-item">
            <a href="your_user_icon_link_here">
              <BsTrash />
            </a>
          </li>
        </ul>
        <label htmlFor="menu" className="menu-closer-overlay" />
      </nav>
    </Main>
  );
}
