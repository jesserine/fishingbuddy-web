import React, { useState, useEffect } from 'react'
import firebaseDb from '../../firebase'
import * as db from '../../firestore'
import { storage } from '../../firebase'
import { v4 as uuid } from 'uuid'


const FishingGearForm = (props) => {
  const initialFieldValues = {
    productName: '',
    productType: '0',
    productBrand: '',
    productPrice: '',
    isDeleted: '0',
  }

  var [values, setValues] = useState(initialFieldValues)

  var [contactObjects, setContactObjects] = useState({})

  useEffect(() => {
    firebaseDb.ref('products').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        })
      else setContactObjects({})
    })
  }, [])

  useEffect(() => {
    if (props.currentId == '')
      setValues({
        ...initialFieldValues,
      })
    else
      setValues({
        ...props.contactObjects[props.currentId],
      })
  }, [props.currentId, props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }


  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.addOrEdit(values)
    window.location.reload(false)
  }

  const enabled = values.productName.length > 0

  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Product Name</label>
          <input
            className='form-control'
            name='productName'
            value={values.productName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Product Type</label>
          <select
            className='form-control'
            name='productType'
            value={values.productType}
            onChange={handleInputChange}
          >
            <option value='0'>Rod</option>
            <option value='1'>Reel</option>
            <option value='2'>Braidline</option>
            <option value='3'>Leaderline</option>
            <option value='4'>Lure</option>
            <option value='5'>Net</option>
          </select>
        </div>


        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Product Brand</label>
          <input
            className='form-control'
            name='productBrand'
            value={values.productBrand}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Product Price</label>
          <input
            className='form-control'
            name='productPrice'
            value={values.productPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='col-sm-2 mb-2 mb-sm-0'>
          <label>Deleted</label>
          <select
            className='form-control'
            name='isDeleted'
            value={values.isDeleted}
            onChange={handleInputChange}
          >
            <option value='0'>False</option>
            <option value='1'>True</option>
          </select>
        </div>
      </div>

      <div className='form-group'>
        <input
          type='submit'
          value={props.currentId == '' ? 'Save' : 'Update'}
          className='btn btn-primary btn-block'
          disabled={!enabled}
        />
      </div>
    </form>
  )
}

export default FishingGearForm
