import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <div>
        <Link to="/">
          <FaHome size={24} title="Página inicial" />
        </Link>
        <Link to="/register" title="Registrar-se">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/login" title="Login">
          <FaSignInAlt size={24} />
        </Link>
      </div>
    </Nav>
  );
}
