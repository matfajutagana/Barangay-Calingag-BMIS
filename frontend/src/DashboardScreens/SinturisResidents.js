import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProfileTable from '../components/ProfileTable'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listResidents } from '../actions/residentActions'

const SinturisResidents = ({ history, match }) => {
  const dispatch = useDispatch()

  const residentList = useSelector((state) => state.residentList)
  const { loading, error, residents } = residentList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listResidents())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      // DELETE PRODUCTS
    }
  }

  const createResidentHandler = (resident) => {
    //   CREATE PRODUCT
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Sinturis Residents</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active"></li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section className="content">
          <div className="row">
            <div className="col-12">
              {/* /.card */}
              <div className="card ">
                {/* /.card-header */}
                <div className="card-body">
                  <ProfileTable
                    res={residents
                      .map((resident, i) => ({
                        ...resident,
                        view: [
                          <Link
                            to={`/profile/${resident._id}`}
                            className="btn btn-success btn-sm"
                          >
                            View
                          </Link>,
                        ],
                        edit: [],
                      }))
                      .filter((res) => {
                        return res.sitio === 'Sinturis'
                      })}
                  />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>

          {/* /.row */}
        </section>
      )}
      {/* /.content */}
    </div>
  )
}

export default SinturisResidents
