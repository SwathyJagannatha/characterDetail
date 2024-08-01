import { useState } from 'react'
import CharacterList from './CharacterList'
import './App.css'
import CharacterDetail from './CharacterDetail';
import Modal from './Modal'

function App() {
   const [selectedCharacter,setSelectedCharacter] = useState(null);
   const [isModalOpen,setIsModalOpen] = useState(false);

   //Function handleCharacterSelect to setselectedcharacter
  
   const handleCharacterSelect = (characterID) => {
    setSelectedCharacter(characterID); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () =>{
    setIsModalOpen(false);
  }
  return (
    <>
      <div className='app-container'>
      <h1>Our Character List:</h1>
      <CharacterList onCharacterSelect={handleCharacterSelect} />

      <Modal show = {isModalOpen} onClose={handleCloseModal}>
      {selectedCharacter && (
        <CharacterDetail characterID={selectedCharacter} />
      )}
      </Modal>
      </div>
    </>
  )
}

export default App
