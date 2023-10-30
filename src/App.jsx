import UserProfile from "./UserProfile"
import { UserProvider } from "./MyUserContext"
function App() {

  return (
    <>
      <h1> User Profile </h1>
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </>
  )
}

export default App
