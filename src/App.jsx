import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import Card from "./components/Card"
import NotFound  from "./components/NotFound";
import AddNupdate from "./components/AddNupdate";


function App() {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false)

  const onOpen = () =>{
    setOpen(true)
  }

  const onClose = () =>{
    setOpen(false)
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
       

        onSnapshot(contactRef,(snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(contactLists);
          setContacts(contactLists);
          return contactLists;
        })

        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contacts");
       

        onSnapshot(contactRef,(snapshot) =>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filterContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))
          // console.log(contactLists);
          setContacts(filterContacts);
          return filterContacts;
        })
  }

  return (<>
    <div className="mx-auto max-w-[370px]">
      <Navbar isOpen = {onOpen} filter = {filterContacts} />
      <div>
        {contacts.length <= 0 ? (
            <NotFound/>
          ) : (contacts.map((contact) => (
          <Card key={contact.id} contact={contact}/>
        )))}
      </div>
      
    </div>
    <AddNupdate isOpen = {isOpen} onClose = {onClose}/>
    </>
  );
}

export default App;
