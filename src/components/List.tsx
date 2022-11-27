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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="itemList">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span style={{ textDecoration: item.isDone ? "line-through" : "" }}>{item.text}</span>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button variant="outline-success" onClick={() => markItem(index)}>✓</Button>{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form onSubmit={handleSubmit}> 
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form.Group>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form.Label><b>Add what you need below!</b></Form.Label>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add an item" />
    </Form.Group>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <br></br>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button className="submitButton" type="submit">Add Item</button>
  </Form>
  );
}

function List() {
  
  const [item, setItems] = React.useState([]);

  const addItems = (text: any) => {
    const newItems = [...item, { text }];
    // @ts-expect-error TS(2345): Argument of type '{ text: any; }[]' is not assigna... Remove this comment to see the full error message
    setItems(newItems);
  };

  const markItem = (index: any) => {
    const newItems = [...item];
    // @ts-expect-error TS(2339): Property 'isDone' does not exist on type 'never'.
    newItems[index].isDone = true;
    setItems(newItems);
  };

  const removeItem = (index: any) => {
    const newItems = [...item];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  //Email list to user
  // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
  const axios = require('axios');
  // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="listApp">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="fixed-list-container">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className="text-center mb-4">Grocery List</h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FormItem addItem={addItems} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
          {item.map((item, index) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Card key={index}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Card.Body>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Item
                
                index={index}
                item={item}
                markItem={markItem}
                removeItem={removeItem}
                />
              </Card.Body>
            </Card>
          ))}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button onClick={handleSend} className="submitButton">Send List to Me</button>
        </div>
      </div>
    </div>
  );
}

export default List;