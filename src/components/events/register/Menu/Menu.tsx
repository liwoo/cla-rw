import React from "react";
import { Step } from "@/components/events/register/Form/RegistrationForm";
import MenuItem from "@/components/events/register/Menu/MenuItem";

interface MenuProps {
  steps: Step[];
  activeStep: Step;
  size?: "small" | "large";
}
const Menu = ({ steps, activeStep, size = "small" }: MenuProps) => {
  return (
    <>
      {steps.map((step) => (
        <MenuItem key={step.step} step={step} active={activeStep} size={size} />
      ))}
    </>
  );
};

export default Menu;
