import React from 'react';

export const iconData = {
  "id": "SplenoTicket",
  "name": "SplenoTicket",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.49 2.72 L 13.07 8.09 L 19.74 5.80 L 16.05 11.81 L 20.29 17.44 L 13.43 15.79 L 9.38 21.57 L 8.84 14.54 L 2.09 12.47 L 8.61 9.77 Z"
      }
    ]
  ]
};

export const SplenoTicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.49 2.72 L 13.07 8.09 L 19.74 5.80 L 16.05 11.81 L 20.29 17.44 L 13.43 15.79 L 9.38 21.57 L 8.84 14.54 L 2.09 12.47 L 8.61 9.77 Z" />
      {children}
    </svg>
  );
});

export default SplenoTicket;
