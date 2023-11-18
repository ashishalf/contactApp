import React from 'react'
import Modal from '../components/Modal'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from "../config/firebase";

function AddNupdate({ onClose, isOpen, isUpdate, contact}) {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef,contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><Modal isOpen = {isOpen} onClose = {onClose}>
    <Formik
    initialValues={
      isUpdate
      ? {
          name: contact.name,
          email: contact.email,
        }
      : {
          name: "",
          email: "",
        }
    }
    onSubmit={(values) => {
      console.log(values)
      isUpdate ?
      updateContact(values, contact.id):
      addContact(values)
    }}
    >
      <Form className='flex flex-col'>
        <div className='flex flex-col gap-1 m-5'>
        <label htmlFor='name'>Name</label>
        <Field name = "name" className=" border h-10 rounded-md"/>
        <label htmlFor='email'>Email</label>
        <Field  name = "email" className=" border h-10 rounded-md"/>
        </div>
        <button type='submit' className='bg-black text-white p-2 rounded-md ml-5 m-3'>{isUpdate ? "Update" : "Add"} Contact</button>
      </Form>
    </Formik>
  </Modal></div>
  )
}

export default AddNupdate