import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store'

import './index.css';

//Импортируем, компоненты для каждой страницы
// Страницы - Главная и Каталог
import { Main, Catalog, Login, Registration } from './pages/'

// ДЗ - заменить на: 
// import { Header, Footer, CatalogItem, CatalogList } from './components'

import { CatalogItem } from './components/catalog-item/catalog-item'
import { CatalogList } from './components/catalog-list/catalog-list'

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
    element: <Catalog />,
    children: [
      // Объект который выводит страницу со всеми товарами
      // по адресу /catalog
      {
        index: true,
        element: <CatalogList />
      },
      // Объект, которые показывает детальную страницу одного товара
      // по адресу /catalog/:id
      {
        path: '/catalog/:id',
        element: <CatalogItem />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registration',
    element: <Registration />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);
