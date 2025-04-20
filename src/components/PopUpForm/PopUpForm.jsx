import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./PopUpForm.css"

function PopUpForm({ onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      languages: [],
      email: '',
      agree: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      gender: Yup.string().required('Select gender please'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      agree: Yup.bool().oneOf([true], 'Accept terms to continue'),
    }),
    onSubmit: (values) => {
      const data = {
        ...values,
        timestamp: new Date().toLocaleString()
      }
      onSubmit(data)
    }
  })

  const toggleLang = (lang) => {
    const selected = formik.values.languages
    const updated = selected.includes(lang)
      ? selected.filter(item => item !== lang)
      : [...selected, lang]
    formik.setFieldValue('languages', updated)
  }

  return (
    <div className="popup">
      <div className="popup_form">
        <button className="close_btn" onClick={onClose}>X</button>
        <h3>Get Started Today!</h3>
        <p>Fill in your details and take control of your tasks.</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <input type="text" name="firstName" placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <input type="text" name="lastName" placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.firstName && <div className="error">{formik.errors.firstName}</div>}
          {formik.errors.lastName && <div className="error">{formik.errors.lastName}</div>}

          <div className="section">
            <label>Gender</label><br />
          <div className="radios">
          <div className="radio">  <label><input type="radio" name="gender" value="Male" onChange={formik.handleChange} /> Male</label></div>
          <div className="radio"> <label><input type="radio" name="gender" value="Female" onChange={formik.handleChange} /> Female</label></div>
          </div>
            {formik.errors.gender && <div className="error">{formik.errors.gender}</div>}
          </div>

          <div className="section">
            <label>Language</label><br />
           <div className="language">
           <label>
              <input type="checkbox" value="English"
                checked={formik.values.languages.includes('English')}
                onChange={() => toggleLang('English')} /> English
            </label>
           </div>
           <div className="language">
           <label>
              <input type="checkbox" value="Hindi"
                checked={formik.values.languages.includes('Hindi')}
                onChange={() => toggleLang('Hindi')} /> Hindi
            </label>
           </div>
           <div className="language">
           <label>
              <input type="checkbox" value="Marathi"
                checked={formik.values.languages.includes('Marathi')}
                onChange={() => toggleLang('Marathi')} /> Marathi
            </label>
           </div>
          </div>

       <div className="email">
       <input type="email" name="email" placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
       </div>
          {formik.errors.email && <div className="error">{formik.errors.email}</div>}

          <label className="agree">
            <input type="checkbox" name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
            />
            I agree to the <span style={{ color: 'red' }}>terms and conditions</span>
          </label>
          {formik.errors.agree && <div className="error">{formik.errors.agree}</div>}

          <button type="submit" className="submit-btn">Done</button>
        </form>
      </div>
    </div>
  )
}

export default PopUpForm
