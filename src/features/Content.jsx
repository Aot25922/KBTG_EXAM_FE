import React from 'react';
import Item from '@components/Item';

function Content({
  friendDataList = [],
  setOpenModal,
  setIsEdit,
  getDataByID,
  deleteDataHandler,
}) {
  return (
    <div className="rounded border border-b-0 border-gray-300">
      {friendDataList?.map((friendData) => (
        <Item
          key={friendData?.id}
          friendData={friendData}
          deleteItem={() => deleteDataHandler(friendData?.id)}
          editItem={() => {
            setOpenModal(true);
            setIsEdit(true);
            getDataByID(friendData?.id);
            console.log('function edit');
          }}
        />
      ))}
    </div>
  );
}

export default Content;
