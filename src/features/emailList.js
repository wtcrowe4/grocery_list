//Email list to user
const React = require('react');
const { useState } = require('react');
const axios = require('axios');
const { useSelector } = require("react-redux");

const [sent, setSent] = useState(false);
const subject = "Your List";

//get list items 
const items = useSelector(state => state.list.list.items);



 export const sendEmail = async (e) => {
  
  
  
  e.preventDefault();
  if (!user) return;
  console.log(items)
  const email = user.email || user.user.email;
  try{
    const response = await axios.post('http://localhost:8080/send_mail', { email, subject , item});
    console.log(response);
    setSent(true);
    console.log(sent)
  } catch (error) {
     console.log(error);
  }
};

