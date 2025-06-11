import React, { useState } from "react";
import FollowButton from "./FollowButton";

export default {
  component: FollowButton,
  title: "Components/FollowButton",
  tags: ["autodocs"],
};

export const ToggleLarge = () => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      checked={checked}
      onClick={() => setChecked(v => !v)}
       size="large"
    />
    
  );
};

export const ToggleMedium = () => {
  const [checked, setChecked] = useState(false);
  return (
    <FollowButton
      checked={checked}
      onClick={() => setChecked(v => !v)}
       size="medium"
    />
    
  );
};
