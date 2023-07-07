import React from 'react';

function CreateUser(props) {
  const { setOpenModal } = props;
  return (
    <div className="flex w-full items-center justify-between">
      <h3 className="text-xl font-bold">Contacts</h3>
      <button
        className="flex items-center gap-2 rounded bg-green-600 px-5 py-2 text-white"
        onClick={() => setOpenModal(true)}
      >
        <svg
          width={8}
          height={8}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <h6 className="text-xs font-medium">Add Contact</h6>
      </button>
    </div>
  );
}

export default CreateUser;
