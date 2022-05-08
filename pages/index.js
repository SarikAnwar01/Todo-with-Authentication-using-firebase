import React from 'react'
import Link from "next/link"
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import DemoPageLinks from '../components/DemoPageLinks'

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
  link: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '0.5rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    transition: 'all 0.2s ease-in-out',
    'a:hover': {
      backgroundColor: 'red',
      color: 'green',
      cursor: 'pointer',
    },
  },

}


const Demo = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <h1><Link style={styles.link} href='/todo' >TODO APP</Link></h1>
          <h3>Home</h3>
          <p>
            This page does not require authentication, so it won't redirect to
            the login page if you are not signed in.Click on SignIn or Todo App to signup and get access to the app.
          </p>
          <p>
          </p>
        </div>
        <DemoPageLinks />
      </div>
    </div >
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Demo)
