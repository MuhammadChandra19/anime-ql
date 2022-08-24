import '@testing-library/jest-dom'
import { fireEvent, render, within } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { BrowserRouter } from "react-router-dom"
import Home from '..'
import { mockAnimeListResponse } from '../../../../../utils/mocks/anime-list-mock'

describe('AnimeList home page', () => {
  test('Should render anime card correctly', async () => {
    const { findByTestId, getByTestId } = render(
      <BrowserRouter>
        <MockedProvider mocks={mockAnimeListResponse} addTypename={false}>
          <Home />
        </MockedProvider>
      </BrowserRouter>
    )
    const animeCard = await findByTestId('anime-item-141902')
    const linkDetail = animeCard.querySelector('a')

    expect(linkDetail?.getAttribute('href')).toEqual('/detail/141902')
    expect(within(animeCard).getByText('ONE PIECE FILM: RED')).toBeInTheDocument()

    const nextPageButton = await findByTestId('next-page-btn')
    await fireEvent.click(nextPageButton)

    expect(getByTestId('anime-loading-0')).toBeInTheDocument()
  })
})

