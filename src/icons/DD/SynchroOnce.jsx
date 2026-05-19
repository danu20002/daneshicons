import React from 'react';

export const iconData = {
  "id": "SynchroOnce",
  "name": "SynchroOnce",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.06 4.43 L 3.92 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 19.09 L 5.27 11.50 L 13.78 19.56 L 16.02 14.12 L 15.77 19.07 L 19.68 4.40 L 20.63 12.63 L 2.91 16.81"
      }
    ]
  ]
};

export const SynchroOnce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.06 4.43 L 3.92 17.61" />
      <path d="M 8.72 19.09 L 5.27 11.50 L 13.78 19.56 L 16.02 14.12 L 15.77 19.07 L 19.68 4.40 L 20.63 12.63 L 2.91 16.81" />
      {children}
    </svg>
  );
});

export default SynchroOnce;
