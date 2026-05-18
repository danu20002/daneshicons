import React from 'react';

export const iconData = {
  id: "EqualNot",
  name: "EqualNot",
  category: "E",
  nodes: [["line",{"x1":"5","x2":"19","y1":"9","y2":"9"}],["line",{"x1":"5","x2":"19","y1":"15","y2":"15"}],["line",{"x1":"19","x2":"5","y1":"5","y2":"19"}]]
};

export const EqualNot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
      <line x1="19" x2="5" y1="5" y2="19" />
      {children}
    </svg>
  );
});

export default EqualNot;
