import React from "react";
import '../css/App.css'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({
  item,
  index,
  markItem,
  removeItem
}: any) {
  return (
    <div className="itemList">
      <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>{item.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markItem(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeItem(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormItem({
  addItem
}: any) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add what you need below!</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add an item" />
    </Form.Group>
    <br></br>
    <button className="submitButton" type="submit">Add Item</button>
  </Form>
  );
}

function List() {
  
  const [item, setItems] = React.useState([]);

  const addItems = (text: any) => {
    const newItems = [...item, { text }];
    setItems(newItems);
  };

  const markItem = (index: any) => {
    const newItems = [...item];
    newItems[index].isDone = true;
    setItems(newItems);
  };

  const removeItem = (index: any) => {
    const newItems = [...item];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  //Email list to user
  const axios = require('axios');
  const { useSelector } = require("react-redux");
  const { user } = useSelector((state: any) => state.auth);
  const [sent, setSent] = React.useState(false);
  const subject = "Your List";
  
  const handleSend = async (e: any) => {
    e.preventDefault();
    if (!user) return;
    console.log(item)
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
  





  return (
    <div className="listApp">
      <div className="fixed-list-container">
        <h1 className="text-center mb-4">Grocery List</h1>
        <FormItem addItem={addItems} />
        <div>
          {item.map((item, index) => (
            <Card key={index}>
              <Card.Body>
                <Item
                
                index={index}
                item={item}
                markItem={markItem}
                removeItem={removeItem}
                />
              </Card.Body>
            </Card>
          ))}
          <button onClick={handleSend} className="submitButton">Send List to Me</button>
        </div>
      </div>
    </div>
  );
}

export default List;