import React, { FC } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useActions } from '../../hooks/useActions';

const PurchaseForm: FC = () => {
  const PurchaseFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .typeError("enter a text")
      .required("required")
      .max(20, "Too Long!"),
    lastName: Yup.string()
      .typeError("enter a text")
      .required("required")
      .max(20, "Too Long!"),
    age: Yup.number().typeError("enter number").required("required"),
    address: Yup.string().typeError("enter a text").required("required"),
    phoneNumber: Yup.number().typeError("enter number").required("required"),
  });

  const {
    purchaseProducts
  } = useActions();

  const style: any = {
    color: "red",
    position: "absolute",
    top: "40%",
    left: "70%",
  };

  return (
    <Formik
      validateOnChange={false}
      validationSchema={PurchaseFormSchema}
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => {
        purchaseProducts(values);
      }}
    >
      {({ errors, touched }) => {
        return (
          <>
            <h3 className="form-title">Fill to purchase:</h3>
            <Form className="purchase-form">
              <label style={{ position: "relative" }} className="form-label">
                First name:
                <Field id="firstName" name="firstName" className="formInput" />
                {errors.firstName && touched.firstName ? (
                  <span style={style}>
                    {errors.firstName}
                  </span>
                ) : null}
              </label>

              <label style={{ position: "relative" }} className="form-label">
                Last name:
                <Field id="lastName" name="lastName" className="formInput" />
                {errors.lastName && touched.lastName ? (
                  <span style={style}>
                    {errors.lastName}
                  </span>
                ) : null}
              </label>

              <label style={{ position: "relative" }} className="form-label">
                Age:
                <Field id="age" name="age" className="formInput" />
                {errors.age && touched.age ? (
                  <span style={style}>
                    {errors.age}
                  </span>
                ) : null}
              </label>

              <label style={{ position: "relative" }} className="form-label">
                Address:
                <Field id="address" name="address" className="formInput" />
                {errors.address && touched.address ? (
                  <span style={style}>
                    {errors.address}
                  </span>
                ) : null}
              </label>

              <label style={{ position: "relative" }} className="form-label">
                Phone number:
                <Field id="phoneNumber" name="phoneNumber" className="formInput" />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <span style={style}>
                    {errors.phoneNumber}
                  </span>
                ) : null}
              </label>

              <button type="submit" className="checkout-btn">
                Checkout
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default PurchaseForm;
