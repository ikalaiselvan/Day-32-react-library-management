import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(8, "enter email min 8 characters")
    .required("email is must"),
  password: yup
    .string()
    .min(8, "password min 8")
    .max(12, "password max 12")
    .required("password is must"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder="Enter your email"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}

      <input
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="text"
        placeholder="Enter your password"
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">Submit</button>

      <div>
        Error
        <pre>{JSON.stringify(formik.errors)}</pre>
        Touched
        <pre>{JSON.stringify(formik.touched)}</pre>
      </div>
    </form>
  );
}
