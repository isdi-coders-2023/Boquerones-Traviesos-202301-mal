import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

jest.mock('../hooks/useGetCharactersList/useGetCharactersList', () => {
  const mockHomePagination = jest.fn();
  const mockFavouritesPagination = jest.fn();

  return {
    __esModule: true,
    default: () => ({
      homePagination: mockHomePagination,
      favouritesPagination: mockFavouritesPagination,
    }),
    mockHomePagination,
    mockFavouritesPagination,
  };
});

describe('Given a pagination component', () => {
  test('When rendering, then it should have the correct elements', () => {
    render(<Pagination typeOfPagination="home" currentAppPage={1} />);
    const containerElement = screen.getByTestId('pag-container');
    const buttonLeft = screen.getByTestId('button-left');
    const buttonRight = screen.getByTestId('button-right');
    const currentPage = screen.getByTestId('current-page');
    expect(containerElement).toBeInTheDocument();
    expect(buttonLeft).toBeInTheDocument();
    expect(currentPage).toBeInTheDocument();
    expect(buttonRight).toBeInTheDocument();
  });

  test('when the left button is clicked once in Home then it should execute its on-click function', () => {
    const getCharactersList = require('../hooks/useGetCharactersList/useGetCharactersList');
    const mockHomePagination = getCharactersList.mockHomePagination;

    render(<Pagination currentAppPage={1} typeOfPagination={'home'} />);
    const buttonLeft = screen.getByTestId('button-left');
    userEvent.click(buttonLeft);
    expect(mockHomePagination).toHaveBeenCalledWith('prev');
  });

  test('when the tight button is clicked once in Home then it should execute its on-click function', () => {
    const getCharactersList = require('../hooks/useGetCharactersList/useGetCharactersList');
    const mockHomePagination = getCharactersList.mockHomePagination;

    render(<Pagination currentAppPage={1} typeOfPagination={'home'} />);
    const buttonRight = screen.getByTestId('button-right');
    userEvent.click(buttonRight);
    expect(mockHomePagination).toHaveBeenCalledWith('next');
  });

  test('when the left button is clicked once in Favourites it then it should execute its on-click function', () => {
    const getCharactersList = require('../hooks/useGetCharactersList/useGetCharactersList');
    const mockFavouritesPagination = getCharactersList.mockFavouritesPagination;

    render(<Pagination currentAppPage={1} typeOfPagination={'favourites'} />);
    const buttonLeft = screen.getByTestId('button-left');
    userEvent.click(buttonLeft);
    expect(mockFavouritesPagination).toHaveBeenCalledWith('prev');
  });

  test('when the right button is clicked once in Favourites it then it should execute its on-click function', () => {
    const getCharactersList = require('../hooks/useGetCharactersList/useGetCharactersList');
    const mockFavouritesPagination = getCharactersList.mockFavouritesPagination;

    render(<Pagination currentAppPage={1} typeOfPagination={'favourites'} />);
    const buttonRight = screen.getByTestId('button-right');
    userEvent.click(buttonRight);
    expect(mockFavouritesPagination).toHaveBeenCalledWith('next');
  });
});
