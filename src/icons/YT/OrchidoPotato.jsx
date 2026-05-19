import React from 'react';

export const iconData = {
  "id": "OrchidoPotato",
  "name": "OrchidoPotato",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.78 2.09 L 13.47 8.35 L 21.91 7.78 L 15.65 13.47 L 16.22 21.91 L 10.53 15.65 L 2.09 16.22 L 8.35 10.53 Z"
      }
    ]
  ]
};

export const OrchidoPotato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.78 2.09 L 13.47 8.35 L 21.91 7.78 L 15.65 13.47 L 16.22 21.91 L 10.53 15.65 L 2.09 16.22 L 8.35 10.53 Z" />
      {children}
    </svg>
  );
});

export default OrchidoPotato;
