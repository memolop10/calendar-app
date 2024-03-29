
import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {

  const dispatch = useDispatch()

  const onOpenModal = () => {
    console.log('click');
    dispatch( uiOpenModal() )
  }

  return (
    <button
      className='btn btn-primary fab'
      onClick={ onOpenModal }
    >
      <i className='fa fa-plus'></i>
    </button>
  )
}

export default AddNewFab