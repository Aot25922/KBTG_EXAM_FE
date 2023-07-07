import React, { useEffect, useState } from 'react';
import CreateUser from '@features/CreateUser';
import Header from '@features/Header';
import Content from '@features/Content';
import Filter from '@features/Filter';
import Modal from '@components/Modal';

const mockFriendDataList = [
  { id: '1', firstName: 'test1', lastName: 'test1', phone: '0000000000' },
  { id: '2', firstName: 'hello', lastName: 'hello', phone: '0000000000' },
  { id: '3', firstName: 'test1', lastName: 'test1', phone: '0000000000' },
];

function ViewFirendInfo() {
  const [friendDataList, setFriendDataList] = useState(mockFriendDataList);
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editContract, setEditContract] = useState(null);
  const [friendDataListFilter, setFriendDataListfilter] = useState([]);
  const [isFilter, setisFilter] = useState(false);
  const validateData = () => {
    try {
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const getDataByID = (id) => {
    try {
      const index = friendDataList.findIndex((e) => e.id === id);
      setEditContract(friendDataList[index]);
      console.log(editContract);
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const createNewDataHandler = (contract) => {
    try {
      const newContract = {
        id: String(parseInt(friendDataList[friendDataList.length - 1].id) + 1),
        ...contract,
      };
      setFriendDataList([...friendDataList, newContract]);
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const editDataHandler = (editContract) => {
    try {
      let newfriendDataList = [...friendDataList];
      const index = newfriendDataList.findIndex(
        (e) => e.id === editContract.id
      );
      newfriendDataList[index] = { ...editContract };
      setFriendDataList(newfriendDataList);
      console.log('Edit Function');
      // You can write code under this line.
    } catch (err) {
      // handler error
    }
  };

  const deleteDataHandler = (id) => {
    try {
      console.log(id);
      const newfriendDataList = friendDataList.filter((e) => e.id != id);
      setFriendDataList(newfriendDataList);
    } catch (err) {
      // handler error
    }
  };

  // optional Bonus point if you can do filter function
  const FilterDataHandler = (search) => {
    try {
      if (search == '') {
        setisFilter(false);
        setFriendDataListfilter([]);
      }
      if (search != '') {
        setisFilter(true);
        const newfriendDataList = friendDataList.filter(
          (e) =>
            e.firstName.includes(search) ||
            e.lastName.includes(search) ||
            e.phone.includes(search)
        );
        setFriendDataListfilter(newfriendDataList);
      }

      // do some thing
    } catch (err) {
      // handler error
    }
  };

  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col justify-center gap-8 ">
        <Header />
        <CreateUser setOpenModal={setOpenModal} />
        <Filter search={FilterDataHandler} />
        <Content
          friendDataList={isFilter ? friendDataListFilter : friendDataList}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setIsEdit={setIsEdit}
          getDataByID={getDataByID}
          deleteDataHandler={deleteDataHandler}
        />
        <Modal
          setIsEdit={setIsEdit}
          setOpenModal={setOpenModal}
          openModal={openModal}
          isEdit={isEdit}
          createNewDataHandler={createNewDataHandler}
          editDataHandler={editDataHandler}
          friendDataObj={editContract}
        />
      </div>
    </div>
  );
}

export default ViewFirendInfo;
