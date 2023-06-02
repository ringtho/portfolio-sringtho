import React from 'react'
import PropTypes from 'prop-types'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                style={active === item ? { backgroundColor: '#313BA' } : {} }
            />
        ))}
    </div>
  )
}

NavigationDots.propTypes = {
  active: PropTypes.string
}

export default NavigationDots
