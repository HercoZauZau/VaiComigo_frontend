/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MySessionRoutes from './MySessionRoutes';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Faq from '../pages/Faq';
import Guides from '../pages/Guides';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import UserRegister from '../pages/UserRegister';
import Destination from '../pages/Destination';
import Solicitar from '../pages/Solicitar';
import Viagens from '../pages/Viagens';
import DestinoPage from '../pages/DestinoPage';
import DestinationCRUD from '../pages/DestinationCRUD';
import PacoteCRUD from '../pages/PacoteCRUD';
import Pacotes from '../pages/Pacotes';
import Pacotes2 from '../pages/Pacotes2';
import MainGallery from '../pages/MainGallery';
import ProfileRegister from '../pages/ProfileRegister';
import Page404 from '../pages/Page404';

export default function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MySessionRoutes>
            <Home />
          </MySessionRoutes>
        }
      />

      <Route
        path="/pacotes"
        element={
          <MySessionRoutes>
            <Pacotes />
          </MySessionRoutes>
        }
      />

      <Route
        path="/pacotes/:id"
        element={
          <MySessionRoutes>
            <Pacotes2 />
          </MySessionRoutes>
        }
      />

      <Route
        path="/viagens/:id"
        element={
          <MySessionRoutes>
            <Viagens />
          </MySessionRoutes>
        }
      />

      <Route
        path="/solicitar/:id"
        element={
          <MySessionRoutes>
            <Solicitar />
          </MySessionRoutes>
        }
      />

      <Route
        path="/pacotesCrud"
        element={
          <MySessionRoutes>
            <PacoteCRUD />
          </MySessionRoutes>
        }
      />

      <Route
        path="/pacotesCrud/:id"
        element={
          <MySessionRoutes>
            <PacoteCRUD />
          </MySessionRoutes>
        }
      />

      <Route
        path="/destinos"
        element={
          <MySessionRoutes>
            <Destination />
          </MySessionRoutes>
        }
      />

      <Route
        path="/destinocrud"
        element={
          <MySessionRoutes>
            <DestinationCRUD />
          </MySessionRoutes>
        }
      />

      <Route
        path="/destinocrud/:id"
        element={
          <MySessionRoutes>
            <DestinationCRUD />
          </MySessionRoutes>
        }
      />

      <Route
        path="/guides"
        element={
          <MySessionRoutes>
            <Guides />
          </MySessionRoutes>
        }
      />

      <Route
        path="/faq"
        element={
          <MySessionRoutes>
            <Faq />
          </MySessionRoutes>
        }
      />

      <Route
        path="/aboutus"
        element={
          <MySessionRoutes>
            <AboutUs />
          </MySessionRoutes>
        }
      />

      <Route
        path="/gallery"
        element={
          <MySessionRoutes>
            <MainGallery />
          </MySessionRoutes>
        }
      />

      <Route
        path="/profile"
        element={
          <MySessionRoutes>
            <ProfileRegister />
          </MySessionRoutes>
        }
      />

      <Route
        path="/destino/:id"
        element={
          <MySessionRoutes>
            <DestinoPage />
          </MySessionRoutes>
        }
      />

      <Route
        path="/profile/:id"
        element={
          <MySessionRoutes isClosed>
            <ProfileRegister />
          </MySessionRoutes>
        }
      />

      <Route
        path="/profile/:id/edit"
        element={
          <MySessionRoutes isClosed>
            <ProfileRegister />
          </MySessionRoutes>
        }
      />

      <Route
        path="/profile/:id/delete"
        element={
          <MySessionRoutes isClosed>
            <ProfileRegister />
          </MySessionRoutes>
        }
      />

      <Route
        path="/profile/:id/view"
        element={
          <MySessionRoutes isClosed>
            <Profile />
          </MySessionRoutes>
        }
      />

      <Route
        path="/login"
        element={
          <MySessionRoutes>
            <Login />
          </MySessionRoutes>
        }
      />

      <Route
        path="/register"
        element={
          <MySessionRoutes>
            <UserRegister />
          </MySessionRoutes>
        }
      />

      <Route
        path="*"
        element={
          <MySessionRoutes>
            <Page404 />
          </MySessionRoutes>
        }
      />
    </Routes>
  );
}
