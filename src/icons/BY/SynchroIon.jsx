import React from 'react';

export const iconData = {
  "id": "SynchroIon",
  "name": "SynchroIon",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.56 18.75 L 11.86 21.41 L 5.25 18.56 L 2.59 11.86 L 5.44 5.25 L 12.14 2.59 L 18.75 5.44 L 21.41 12.14 Z"
      }
    ]
  ]
};

export const SynchroIon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.56 18.75 L 11.86 21.41 L 5.25 18.56 L 2.59 11.86 L 5.44 5.25 L 12.14 2.59 L 18.75 5.44 L 21.41 12.14 Z" />
      {children}
    </svg>
  );
});

export default SynchroIon;
