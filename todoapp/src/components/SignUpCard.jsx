import React from 'react';

const SignUpCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='First Name...' />
            <input type="text" placeholder='Last Name...' />
            <input type="text" placeholder='Email...' />
            <input type="text" placeholder='Password...' />
            <input type="text" placeholder='Confirm Password...' />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpCard