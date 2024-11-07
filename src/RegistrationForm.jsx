import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Phone number is invalid").required("Phone number is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      password: "",
      confirmPassword: "",
      address: "",
      country: "",
      profilePicture: null,
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
      alert("Registration Successful!");
    },
  });

  return (
    <div className="form-container" style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", backgroundColor: "#f0f8ff", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullName} />
          {formik.touched.fullName && formik.errors.fullName && <p className="error">{formik.errors.fullName}</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
        </div>

        <div>
          <label>Phone Number</label>
          <input type="text" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
          {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}
        </div>

        <div>
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dateOfBirth} />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && <p className="error">{formik.errors.dateOfBirth}</p>}
        </div>

        <div>
          <label>Gender</label>
          <div>
            <input type="radio" name="gender" value="Male" onChange={formik.handleChange} checked={formik.values.gender === "Male"} /> Male
            <input type="radio" name="gender" value="Female" onChange={formik.handleChange} checked={formik.values.gender === "Female"} /> Female
            <input type="radio" name="gender" value="Other" onChange={formik.handleChange} checked={formik.values.gender === "Other"} /> Other
          </div>
          {formik.touched.gender && formik.errors.gender && <p className="error">{formik.errors.gender}</p>}
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
          {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="error">{formik.errors.confirmPassword}</p>}
        </div>

        <div>
          <label>Address</label>
          <textarea name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}></textarea>
          {formik.touched.address && formik.errors.address && <p className="error">{formik.errors.address}</p>}
        </div>

        <div>
          <label>Country</label>
          <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}>
            <option value="" label="Select your country" />
            <option value="USA" label="USA" />
            <option value="Canada" label="Canada" />
            <option value="India" label="India" />
          </select>
          {formik.touched.country && formik.errors.country && <p className="error">{formik.errors.country}</p>}
        </div>

        <div>
          <label>Profile Picture (Optional)</label>
          <input type="file" name="profilePicture" onChange={(event) => formik.setFieldValue("profilePicture", event.target.files[0])} />
        </div>

        <div>
          <input type="checkbox" name="terms" onChange={formik.handleChange} checked={formik.values.terms} />
          <label>I accept the terms and conditions</label>
          {formik.touched.terms && formik.errors.terms && <p className="error">{formik.errors.terms}</p>}
        </div>

        <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;