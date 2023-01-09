import SingleUserDataDisplayer from '../SingleUserDataDisplayer'
import { Frame, TravelportLogo, InsertUsers, NumberOfUsers, AddUsersButton, SingleUsersContainer } from './styles'
import { useState } from 'react'
import ApiHelper from '../helpers/axios.helper'

const baseURL = 'https://randomuser.me/api?results=25'

export const UsersDataDisplayer = () => {
  const usersDataFromApi = ApiHelper(baseURL)
  const [numberOfUsers, setNumberOfUsers] = useState(0)
  const [usersDataListState, setUsersDataListState] = useState([])

  const modifyUsersList = () => {
    if (numberOfUsers < usersDataFromApi.results.length) {
      setNumberOfUsers(numberOfUsers + 1)
      setUsersDataListState([...usersDataListState, usersDataFromApi.results[numberOfUsers]])
    } else if (numberOfUsers === usersDataFromApi.results.length) {
      setNumberOfUsers(0)
      setUsersDataListState([])
    }
  }

  return (
    <Frame>
      <SingleUsersContainer>
        {usersDataListState.map((user, index) => {
          return (
            <SingleUserDataDisplayer key={index} userFirstName={user.name.first} userLastName={user.name.last} userEmail={user.email} userImage={user.picture.medium} />
          )
        })}
      </SingleUsersContainer>
    </Frame>
  )
}