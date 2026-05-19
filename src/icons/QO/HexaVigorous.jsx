import React from 'react';

export const iconData = {
  "id": "HexaVigorous",
  "name": "HexaVigorous",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.93 11.56 L 9.62 3.24 L 19.60 7.03 L 19.08 17.69 L 8.78 20.49 Z"
      }
    ]
  ]
};

export const HexaVigorous = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.93 11.56 L 9.62 3.24 L 19.60 7.03 L 19.08 17.69 L 8.78 20.49 Z" />
      {children}
    </svg>
  );
});

export default HexaVigorous;
