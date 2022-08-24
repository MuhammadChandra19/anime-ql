import { MockedProvider } from '@apollo/client/testing'
import '@testing-library/jest-dom'
import { fireEvent, render, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Detail from '..'
import { mockAnimeDetailResponse } from '../../../../../utils/mocks/anime-detail-mock'


jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation(() => jest.fn())
jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((storage => {
  if(storage === 'animeStorage') {
    return JSON.stringify({
      1: {
        collectionIds: {
          1661275660619: true
        }
      }
    })
  }

  if(storage === 'collectionNames') {
    return JSON.stringify({
      1661275660619: "hello"
    })
  }
}))

const renderComponent = () => render(
  <BrowserRouter>
    <MockedProvider mocks={mockAnimeDetailResponse} addTypename={false}>
      <Detail />
    </MockedProvider>
  </BrowserRouter>
)



jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 1,
  }),
}))

describe('Anime Detail', () => {

  test('Should Render Detail Correctly', async () => {
    const { findByTestId , debug} = renderComponent()

    expect(localStorage.getItem).toHaveBeenLastCalledWith('animeStorage')

    const animeTitle = await findByTestId('anime-title')
    expect(animeTitle.textContent).toEqual('Cowboy Bebop')

    const collectionName = await findByTestId('collection-1661275660619')
    expect(collectionName.getAttribute('href')).toEqual('/collection/hello')

  })

  test('Should Create new Collection', async () => {
    const { findByText, findByTestId, getByTestId} = renderComponent()
    const addToCollectionButton = await findByText('Add to List')

    //check if modal shown
    await fireEvent.click(addToCollectionButton)
    expect(await findByTestId('add-to-collection-modal')).toBeInTheDocument()

    //check if collection available
    expect(within(getByTestId('collection-names')).queryByText('new collection 1')).not.toBeInTheDocument()

    //add new collection
    await fireEvent.click(await findByText('Add new Collection'))
    expect(localStorage.setItem).toHaveBeenCalledWith('collectionList', '{\"new collection 1\":[]}')


    jest.spyOn(window.localStorage.__proto__, 'getItem').mockClear()
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation((storage => {
      if(storage === 'animeStorage') {
        return JSON.stringify({
          1: {
            collectionIds: {
              1661275660619: true,
              1243253252355: true
            }
          }
        })
      }
    
      if(storage === 'collectionNames') {
        return JSON.stringify({
          1661275660619: "hello",
          1243253252355: 'new collection 1'
        })
      }
    }))

    const newCollection = getByTestId('collection-0')
    await fireEvent.click(newCollection)
    expect(within(getByTestId('collection-names')).getByText('new collection 1')).toBeInTheDocument()
  })
})

