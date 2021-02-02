import React, { useState, useEffect } from 'react'

const HobbyistForm = (props) => {
  const initialFieldValues = {
    rodType: '',
    rodBrand: '',
    rodPrice: '0',
    lureType: '',
    lureBrand: '',
    lurePrice: '0',
    reelType: '',
    reelBrand: '',
    reelPrice: '0',
    braidlineType: '',
    braidlineBrand: '',
    braidlinePrice: '0',
    leaderlineType: '',
    leaderlineBrand: '',
    leaderlinePrice: '0',
    baitType: '',
    baitBrand: '',
    baitPrice: '0',
    fishingEnvironment: '',
    typeOfHobbyist: '',
    isDeleted: '0',
    totalPrice: '',
  }

  var [values, setValues] = useState(initialFieldValues)

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
  }

  values.totalPrice =
    Number(values.rodPrice) +
    Number(values.lurePrice) +
    Number(values.reelPrice) +
    Number(values.braidlinePrice) +
    Number(values.leaderlinePrice) +
    Number(values.baitPrice)

  return (
    // <></>
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Rod Type</label>
          <input
            className='form-control'
            name='rodType'
            value={values.rodType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Rod Brand</label>
          <input
            className='form-control'
            name='rodBrand'
            value={values.rodBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Rod Price</label>
          <input
            className='form-control'
            name='rodPrice'
            type='number'
            value={values.rodPrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Lure Type</label>
          <input
            className='form-control'
            name='lureType'
            value={values.lureType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Lure Brand</label>
          <input
            className='form-control'
            name='lureBrand'
            value={values.lureBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Lure Price</label>
          <input
            className='form-control'
            name='lurePrice'
            type='number'
            value={values.lurePrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Reel Type</label>
          <input
            className='form-control'
            name='reelType'
            value={values.reelType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Reel Brand</label>
          <input
            className='form-control'
            name='reelBrand'
            value={values.reelBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Reel Price</label>
          <input
            className='form-control'
            name='reelPrice'
            type='number'
            value={values.reelPrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Braidline Type</label>
          <input
            className='form-control'
            name='braidlineType'
            value={values.braidlineType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Braidline Brand</label>
          <input
            className='form-control'
            name='braidlineBrand'
            value={values.braidlineBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Braidline Price</label>
          <input
            className='form-control'
            name='braidlinePrice'
            type='number'
            value={values.braidlinePrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Leaderline Type</label>
          <input
            className='form-control'
            name='leaderlineType'
            value={values.leaderlineType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Leaderline Brand</label>
          <input
            className='form-control'
            name='leaderlineBrand'
            value={values.leaderlineBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Leaderline Price</label>
          <input
            className='form-control'
            name='leaderlinePrice'
            type='number'
            value={values.leaderlinePrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Bait Type</label>
          <input
            className='form-control'
            name='baitType'
            value={values.baitType}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Bait Brand</label>
          <input
            className='form-control'
            name='baitBrand'
            value={values.baitBrand}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Bait Price</label>
          <input
            className='form-control'
            name='baitPrice'
            type='number'
            value={values.baitPrice}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Fishing Environment</label>
          <input
            className='form-control'
            name='fishingEnvironment'
            value={values.fishingEnvironment}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-4'>
          <label>Type of Hobbyist</label>
          <input
            className='form-control'
            name='typeOfHobbyist'
            value={values.typeOfHobbyist}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-sm-2'>
          <label>Total Price</label>
          <input
            className='form-control disable'
            name='totalPrice'
            value={values.totalPrice}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className='col-sm-2'>
          <label>Deleted</label>
          {/* <input
            className='form-control'
            placeholder='Deleted'
            name='isDeleted'
            value={values.isDeleted}
            onChange={handleInputChange}
          /> */}
          <select
            className='form-control'
            name='isDeleted'
            value={values.isDeleted}
            onChange={handleInputChange}
          >
            <option value='0'>No</option>
            <option value='1'>Yes</option>
          </select>
        </div>
      </div>

      <div className='form-group'>
        <input
          type='submit'
          value={props.currentId == '' ? 'Save' : 'Update'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  )
}

export default HobbyistForm
