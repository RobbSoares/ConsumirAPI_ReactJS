import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <div>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/ads">
          <FaSignInAlt size={24} />
        </Link>

        {botaoClicado ? 'clicado' : 'não clicado'}
      </div>
    </Nav>
  );
}
