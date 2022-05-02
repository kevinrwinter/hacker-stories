// if handleChange is a function
// which does not return a function
// don't do this
<input onChange={handleChange()} />

// do this instead
<input onChange={handleChange} />
