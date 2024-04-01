import React, { useState } from 'react';

const rooms = [
  {
    title: "Пентхаус Utopia House",
    src: "/img/cards/01.jpg",
    description: [
      "Цена: 10 000 000 Р",
      "Бассейн: ☓",
      "Кол-во комнат: 5",
      "Обслуживание номера: ☓"
    ],
  },
  {
    title: "Апартаменты NiceLoft ",
    src: "/img/cards/02.jpg",
    description: [
      "Цена: 20 000 000 Р",
      "Бассейн: ☓",
      "Кол-во комнат: 6",
      "Обслуживание номера: ✓",
    ],
  },
  {
    title: "Апартаменты LoftStudio",
    src: "/img/cards/03.jpg",
    description: [
      "Цена: 30 000 000 Р",
      "Бассейн: ✓",
      "Кол-во комнат: 7",
      "Обслуживание номера: ☓",
    ],
  },
  {
    title: "Loft Квартира Престиж",
    src: "/img/cards/04.jpg",
    description: [
      "Цена: 40 000 000 Р",
      "Бассейн: ✓",
      "Кол-во комнат: 8",
      "Обслуживание номера: ✓"
    ],
  },
]

export default function Catalog(){

const roomsJsx = rooms.map((room, i) => {
  
  return (<CreateModal room={room} key={i} />);
});

return (
  <>
    <div className="container">
      <div className="apartments__title">
        <h2 className="title-2">Наши квартиры</h2>
      </div>
      <div className="apartments__cards">
        {roomsJsx}
      </div>
    </div>
  </>
);
}


function CreateModal({ room }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const descriptionJsx = room.description.map((desc, i) => {
    return (<p key={i}>{desc}</p>);
  })

  return(
    <div className='card' onClick={openModal}>
      <img
          className="card__img"
          src={room.src}
          alt="Пентхаус “Loft Олимп”"
      />
      <h3 className="card__title">{room.title}</h3>
      {
        modalIsOpen ?
          <div className='w-full h-full bg-gradient-to-b from-gray-500 fixed flex justify-center items-center z-10 left-0 top-0' >
            <div className='text-white text-center'>
              <img
                className="card__img"
                src={room.src}
                alt="Пентхаус “Loft Олимп”"
              />
              {descriptionJsx}
              <button className='font-bold text-slate-400' onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        : ''
      }
    </div>
  )
}