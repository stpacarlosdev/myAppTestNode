import { getTransactions, postTransactions } from "application/functions";
import { forEach, map } from "ramda";
import React, { Fragment, useState } from "react";

const FormPage = (props) => {
  const { history } = props;
  const [listInfoBack, setListInfoBack] = useState(null);
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();

  const handleSumbit = (event) => {
    event.preventDefault();

    const titleValue = titleRef?.current?.value;
    const descriptionValue = descriptionRef?.current?.value;

    const responseObject = JSON.stringify({ id: Math.random() * 1000, title: titleValue, description: descriptionValue });

    postTransactions(responseObject);
  }

  const getInfoBack = () => {
    getTransactions(setListInfoBack);
  }

  return (
    <Fragment>
      <div>
        <h1>PAGINA FORM</h1>
        <form onSubmit={handleSumbit}>
          <div>
            <label htmlFor="title">TITLE</label>
            <br />
            <input type="text" id="title" placeholder="title" ref={titleRef} />
          </div>
          <br />
          <div>
            <label htmlFor="description">DESCRPTION</label>
            <br />
            <input type="text" id="description" placeholder="description" ref={descriptionRef} />
          </div>
          <br />
          <button type="submit">SAVE</button>
        </form>
        <br></br>
        <div>
          <button onClick={getInfoBack}>TRAER INFO BACKEND</button>
        </div>
        <br></br>
        <div>
          {listInfoBack && map(i =>
            <div key={i.id}>
              <p>ID: {i.id}</p>
              <p>Title: {i.title}</p>
              <p>Description: {i.description}</p>
              <hr></hr>
            </div>
            , listInfoBack)}
        </div>
      </div>
    </Fragment >
  );
};

export default FormPage;