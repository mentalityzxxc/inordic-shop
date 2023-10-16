import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Импортируем, компоненты для каждой страницы
// Страницы - Главная и Каталог
import { Main, Catalog } from './pages/'
// Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer } from './components'

// Импортируем основные инструменты для работы с маршрутизацией в приложении
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Объект роутера
// В данном объекте описаны маршруты приложения
const router = createBrowserRouter([
  {
    // Путь, по которому отображается главная страница
    path: "/",
    // Компонент, который содержит главную страницу
    element: <Main />,
  },
  {
    // Путь, по которому отображается страница каталога
    path: "/catalog",
    // Компонент, который содержит логику отображения страницы каталога
    element: <Catalog />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
     <RouterProvider router={router} />
     <Footer />
  </React.StrictMode>
);
