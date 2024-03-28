import React, { useState } from 'react';

const rooms = [
  {
    title: "Квартира 1",
    src: "/img/cards/01.jpg",
    description: [
      "Цена: 15 000 000 Р",
      "Бассейн: ✓",
    ],
  },
  {
    title: "Квартира 1",
    src: "/img/cards/01.jpg",
    description: [
      "Цена: 150 000 000 Р",
      "Бассейн: ✓",
    ],
  },
  {
    title: "Квартира 1",
    src: "/img/cards/01.jpg",
    description: [
      "Цена: 1500 000 000 Р",
      "Бассейн: ✓",
    ],
  },
]


export default function TestPivo() {
  const roomsJsx = rooms.map((room, i) => {
    return (<CreateModal room={room} key={i} />);
  });

  return (
    <>
      {roomsJsx};
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

  return (
    <div className='p-14'>
      <img onClick={openModal}
          className="card__img"
          src={room.src}
          alt="Пентхаус “Loft Олимп”"
      />
      {room.title}
      {
        modalIsOpen ?
          <div className='w-full h-full bg-white fixed flex justify-center items-center z-10 left-0 top-0' >
            <div className='text-black'>
              <img
                className="card__img"
                src={room.src}
                alt="Пентхаус “Loft Олимп”"
              />
              {descriptionJsx}
              <button className='font-bold' onClick={closeModal}>Закрыть</button>
            </div>
          </div>
        : ''
      }
    </div>
  )
}