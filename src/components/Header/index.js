import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <div>
        <Link to="/">
          <FaHome size={24} title="Página inicial" />
        </Link>
        <Link to="/register" title="Registrar-se">
          <FaUserAlt size={24} />
        </Link>

        {isLoggedIn ? (
          <Link onClick={handleLogout} to="/logout" title="Sair">
            <FaPowerOff size={24} />
          </Link>
        ) : (
          <Link to="/login" title="Login">
            <FaSignInAlt size={24} />
          </Link>
        )}

        {isLoggedIn && <FaCircle size={24} color="#9fe6a0" title="Sair" />}
      </div>
    </Nav>
  );
}
