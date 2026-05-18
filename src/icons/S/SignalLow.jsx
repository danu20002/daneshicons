import React from 'react';

export const iconData = {
  id: "SignalLow",
  name: "SignalLow",
  category: "S",
  nodes: [["path",{"d":"M2 20h.01"}],["path",{"d":"M7 20v-4"}]]
};

export const SignalLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      {children}
    </svg>
  );
});

export default SignalLow;
