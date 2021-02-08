import React, { useState, useEffect } from 'react'
import firebaseDb from '../firebase'
import * as db from '../firestore'

const HobbyistForm = (props) => {
  var [rodObjects, setRodObjects] = useState({})
  var [reelObjects, setReelObjects] = useState({})
  var [braidlineObjects, setBraidlineObjects] = useState({})
  var [leaderlineObjects, setLeaderlineObjects] = useState({})
  var [lureObjects, setLureObjects] = useState({})
  var [environmentObjects, setEnvironmentObjects] = useState({})
  var [catchObjects, setCatchObjects] = useState({})
  var [hobbyistObjects, setHobbyistObjects] = useState({})

  useEffect(() => {
    firebaseDb.ref('hobbyist/rodTypes').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setRodObjects({
          ...snapshot.val(),
        })
      else setRodObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/reelType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setReelObjects({
          ...snapshot.val(),
        })
      else setReelObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/braidlineType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setBraidlineObjects({
          ...snapshot.val(),
        })
      else setBraidlineObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/leaderlineType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setLeaderlineObjects({
          ...snapshot.val(),
        })
      else setLeaderlineObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/lureType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setLureObjects({
          ...snapshot.val(),
        })
      else setLureObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/environmentType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setEnvironmentObjects({
          ...snapshot.val(),
        })
      else setEnvironmentObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/catchType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setCatchObjects({
          ...snapshot.val(),
        })
      else setCatchObjects({})
    })
  }, [])

  useEffect(() => {
    firebaseDb.ref('hobbyist/hobbyistType').on('value', (snapshot) => {
      if (snapshot.val() != null)
        setHobbyistObjects({
          ...snapshot.val(),
        })
      else setHobbyistObjects({})
    })
  }, [])

  const initialFieldValues = {
    rodTypes: '',
    rodBrand: '',
    rodPrice: '0',
    reelType: '',
    reelBrand: '',
    reelPrice: '0',
    braidlineType: '',
    braidlineBrand: '',
    braidlinePrice: '0',
    leaderlineType: '',
    leaderlineBrand: '',
    leaderlinePrice: '0',
    lureType: '',
    lureBrand: '',
    lurePrice: '0',
    environmentType: '',
    catchType: '',
    hobbyistType: '',
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
        ...props.hobbyistObjects[props.currentId],
      })
  }, [props.currentId, props.hobbyistObjects])

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
    Number(values.reelPrice) +
    Number(values.braidlinePrice) +
    Number(values.leaderlinePrice) +
    Number(values.lurePrice)

  return (
    // <></>
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Rod Type</label>
          <select
            className='form-control'
            name='rodTypes'
            value={values.rodTypes}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(rodObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={rodObjects[id].rodTypeName}>
                    {rodObjects[id].rodTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
        </div>
        <div className='col-sm-4'>
          <label>Rod Brand</label>
          <input
            className='form-control'
            name='rodBrand'
            value={values.rodBrand}
            onChange={handleInputChange}
            required
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
            required
          />
        </div>
      </div>

      <div className='form-group input-group row'>
        <div className='col-sm-4 mb-4 mb-sm-0'>
          <label>Reel Type</label>
          <select
            className='form-control'
            name='reelType'
            value={values.reelType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(reelObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={reelObjects[id].reelTypeName}>
                    {reelObjects[id].reelTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
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
          <select
            className='form-control'
            name='braidlineType'
            value={values.braidlineType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(braidlineObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={braidlineObjects[id].braidlineTypeName}>
                    {braidlineObjects[id].braidlineTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
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
          <select
            className='form-control'
            name='leaderlineType'
            value={values.leaderlineType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(leaderlineObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={leaderlineObjects[id].leaderlineTypeName}>
                    {leaderlineObjects[id].leaderlineTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
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
          <label>Lure Type</label>
          <select
            className='form-control'
            name='lureType'
            value={values.lureType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(lureObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={lureObjects[id].lureTypeName}>
                    {lureObjects[id].lureTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
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
        <div className='col-sm-4 mb-3 mb-sm-0'>
          <label>Environment Type</label>
          <select
            className='form-control'
            name='environmentType'
            value={values.environmentType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(environmentObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={environmentObjects[id].fishingEnviTypeName}>
                    {environmentObjects[id].fishingEnviTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
        </div>
        <div className='col-sm-2'>
          <label>Catch Type</label>
          <select
            className='form-control'
            name='catchType'
            value={values.catchType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(catchObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={catchObjects[id].catchTypeName}>
                    {catchObjects[id].catchTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
        </div>
        <div className='col-sm-2'>
          <label>Hobbyist Type</label>
          <select
            className='form-control'
            name='hobbyistType'
            value={values.hobbyistType}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select</option>
            {Object.keys(hobbyistObjects).map((id) => {
              return (
                <React.Fragment key={id}>
                  <option value={hobbyistObjects[id].hobbyistTypeName}>
                    {hobbyistObjects[id].hobbyistTypeName}
                  </option>
                </React.Fragment>
              )
            })}
          </select>
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
