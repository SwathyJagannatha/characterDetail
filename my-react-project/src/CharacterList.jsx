import React,{useState,useEffect} from "react";
import axios from "axios"
import './App.css'

//charatcer list
//use effct to fetch data from aPI
//display each character's name and thumbnail image in grid format

const CharacterList = ({onCharacterSelect}) =>{

     const [characters, setCharacters] = useState([]);

     const fetchCharacters = async ()=>{

        const publicKey = `3113aef1537237b12104d52036ade54f`
        const hash = `9ba49e6697eb0f5d1bb73a6e7e5713eb`
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;
     
        try{
              const response = await axios.get(url);
              const data = response.data.data.results;
              //const 
              setCharacters(data);
              console.log("success");
              console.log(data);
        }
        catch{
            console.log("Error fetching character list")
        }
    }

    useEffect(() =>{
        fetchCharacters();
    },[])

    return (
     <div className="char-list">
      <h2>Character Info</h2>
        {/* Map out the orders array where the key is the order.id */}
        {/* LI "Order ID: x Date: x" */}
        { characters.map(charac => (
        <div className = "grid-item" key={charac.id}>
           <p> Character Id: {charac.id} </p>
           <p> Name: {charac.name} </p>
           <img src = {`${charac.thumbnail.path}.${charac.thumbnail.extension}`} alt={charac.name} className="thumbnail" onClick={()=> onCharacterSelect(charac.id)}/>
           <p>Events: {charac.events.available}</p>
           <p>Series: {charac.series.collectionURI}</p>
           
           <button onClick={()=> onCharacterSelect(charac.id)}></button>
        </div>
        )) }
      </div>
    )}

export default CharacterList;