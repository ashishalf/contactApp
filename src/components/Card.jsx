import { deleteDoc,doc } from 'firebase/firestore'
import {useState} from 'react'
import {db} from '../config/firebase'
import AddNupdate from './AddNupdate';

function Card({contact}) {

    const deleteContact = async (id) =>{
        try{
            await deleteDoc(doc(db, "contacts", id));
        } catch(error){
            console.log(error)
        }
    }

    const [isOpen, setOpen] = useState(false)

  const onOpen = () =>{
    setOpen(true)
  }

  const onClose = () =>{
    setOpen(false)
  }

  return (
    <>
    <div
            key={contact.id}
            className="bg-white my-4 h-[80px] rounded-lg flex items-center justify-between"
          >
            <div className="flex gap-3">
              <img
                src="https://img.icons8.com/ios-filled/50/user.png"
                className="ml-4"
              />
              <div className=""> 
                <p className="text-lg text-left"><b>{contact.name}</b></p>
                <p>{contact.email}</p>
              </div>
            </div>

            <div className="flex mr-4">
              <img onClick={onOpen}
                width="38"
                height="38"
                src="https://img.icons8.com/fluency-systems-filled/48/pen-squared.png"
                className='cursor-pointer'/>
              <img onClick={()=>deleteContact(contact.id)}
                width="38"
                height="38"
                src="https://img.icons8.com/sf-regular-filled/48/filled-trash.png"
              className='cursor-pointer'/>
            </div>
          </div>
          <AddNupdate contact={contact} isUpdate isOpen = {isOpen} onClose = {onClose}/>
          </>

  )
}

export default Card