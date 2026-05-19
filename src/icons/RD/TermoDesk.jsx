import React from 'react';

export const iconData = {
  "id": "TermoDesk",
  "name": "TermoDesk",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 7.51 L 19.72 8.80 L 19.07 10.38 L 19.11 9.46 L 18.44 10.16 L 18.61 7.71 L 16.52 8.66 L 14.10 11.61 L 14.85 13.51 L 16.91 11.63 L 17.19 9.34 L 15.08 8.32 L 14.87 10.59 L 17.00 12.71 L 17.68 13.35 L 16.77 13.27 L 19.44 14.21 L 16.81 14.16 L 16.39 13.64 L 17.21 14.61 L 18.82 14.24 L 17.10 11.81 L 19.53 11.27 L 17.98 11.96"
      }
    ]
  ]
};

export const TermoDesk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 7.51 L 19.72 8.80 L 19.07 10.38 L 19.11 9.46 L 18.44 10.16 L 18.61 7.71 L 16.52 8.66 L 14.10 11.61 L 14.85 13.51 L 16.91 11.63 L 17.19 9.34 L 15.08 8.32 L 14.87 10.59 L 17.00 12.71 L 17.68 13.35 L 16.77 13.27 L 19.44 14.21 L 16.81 14.16 L 16.39 13.64 L 17.21 14.61 L 18.82 14.24 L 17.10 11.81 L 19.53 11.27 L 17.98 11.96" />
      {children}
    </svg>
  );
});

export default TermoDesk;
