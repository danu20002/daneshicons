import React from 'react';

export const iconData = {
  id: "AirVent",
  name: "AirVent",
  category: "A",
  nodes: [["path",{"d":"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}],["path",{"d":"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{"d":"M6 8h12"}],["path",{"d":"M6.6 15.572A2 2 0 1 0 10 17v-5"}]]
};

export const AirVent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
      {children}
    </svg>
  );
});

export default AirVent;
