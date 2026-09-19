
import './App.css'
import Input from './Components/Input'
import Button from './Components/Button'
import SignPageCard from './Components/SignPageCard'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

function App() {


  return (
    <main>
      {/*<Input label="your name" placeholder="write your name here" />
      <Button children="Continue With Google" className="bg-gray-50/80  border-gray-200 " />
        */}
        <SignUpPage />
      </main>
  )
}

export default App
