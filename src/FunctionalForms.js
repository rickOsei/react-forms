import { useState } from "react";

export default function FunctionForms() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleClick = (e) => {
    const input = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      id: Math.floor(Math.random() * 2000),
    };

    e.preventDefault();
    setInputArray((prev) => {
      return [...prev, input];
    });

    setInputName("");
    setInputEmail("");
    setInputPhone("");
  };

  return (
    <>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Enter name..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <input
          name="email"
          type="email"
          placeholder="Enter email..."
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <input
          name="phone"
          type="number"
          placeholder="Enter phone..."
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <div className="output">
        {inputArray.map((element, index) => {
          return (
            <div key={index}>
              <h1>name:{element.name}</h1>
              <h1>email:{element.email}</h1>
              <h1>phone:{element.phone}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
