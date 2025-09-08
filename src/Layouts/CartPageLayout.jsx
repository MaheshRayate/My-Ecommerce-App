import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Outlet, useLocation } from "react-router-dom";
import useAuthUser from "../Custom Hooks/useAuthUser";
import NotLoggedIn from "./../Pages/NotLoggedInPage/NotLoggedIn";
import useGetCartSummary from "../Custom Hooks/useGetCartSummary";
import CartEmptyContainer from "../Components/CartBagPage/CartEmptyContainer";

const CartPageLayout = () => {
  const steps = ["Bag", "Address", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const { isAuthenticated, user } = useAuthUser();
  const { cart } = useGetCartSummary();

  const location = useLocation();

  const currentPage = location.pathname.split("/")[2];
  // console.log(currentPage);
  // console.log(cart);

  const currentPageStep = steps.findIndex(
    (step) => step.toLowerCase() === currentPage
  );

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <section className="px-2 lg:px-20 mt-5">
      {isAuthenticated ? (
        <div>
          {cart?.cartItems?.length > 0 ? (
            <div>
              <Box sx={{ width: "100%" }}>
                <Stepper activeStep={currentPageStep}>
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                      labelProps.optional = (
                        <Typography variant="caption">Optional</Typography>
                      );
                    }
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                      All steps completed - you&apos;re finished
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </Box>
              <Outlet context={{ user, cart }} />
            </div>
          ) : (
            <div>
              <CartEmptyContainer />
            </div>
          )}
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </section>
  );
};

export default CartPageLayout;
