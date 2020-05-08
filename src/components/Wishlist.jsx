import React from "react";

const wishes = [
  {
    text: "Viajar a la luna",
    done: false,
  },
  {
    text: "Pagar el gym",
    done: true,
  },
  {
    text: "Ir al gym",
    done: false,
  },
];

function Wishlist() {
  return (
    <>
      <fieldset>
        <legend> Nuevo deseo</legend>
        <input type="text" placeholder="Nuevo deseo" />
      </fieldset>
      <ul>
        {wishes.map(({ text, done }, i) => (
          <li>
            <label htmlFor={`wish${i}`}>
              <input
                type="checkbox"
                name="deseo"
                id={`wish${i}`}
                checked={done}
              />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <button type="button">Archivar</button>
    </>
  );
}
export default Wishlist;
