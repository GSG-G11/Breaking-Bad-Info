import React from "react";
import { useParams } from "react-router-dom";
import '../../../App.css';

const CharCard = ({ char }) => {
  const { id } = useParams();

  return (
    <>
      {char.length ? (
        char
          .filter((item) => item.char_id === +id)
          .map((item) => {
            return (
              <div className="char-card">
                <img src={item.img} alt={item.name} />
                <p className="char">Name : {item.name}</p>
                <p className="char">Nickname : {item.nickname}</p>
                <p className="char"> Status : {item.status}</p>
                <p className="char">Birthday : {item.birthday}</p>
              </div>
            );
          })
      ) : (
        <div class="louder-container">
        <div class="loader"></div>
      </div>
      )}
    </>
  );
};

export default CharCard;
