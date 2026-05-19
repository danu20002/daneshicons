import React from 'react';

export const iconData = {
  "id": "VeraceSilly",
  "name": "VeraceSilly",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.45 22.42 L 7.91 16.17 L 1.61 13.74 L 6.77 9.40 L 7.13 2.66 L 12.86 6.23 L 19.38 4.49 L 17.76 11.03 L 21.43 16.70 L 14.70 17.18 Z"
      }
    ]
  ]
};

export const VeraceSilly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.45 22.42 L 7.91 16.17 L 1.61 13.74 L 6.77 9.40 L 7.13 2.66 L 12.86 6.23 L 19.38 4.49 L 17.76 11.03 L 21.43 16.70 L 14.70 17.18 Z" />
      {children}
    </svg>
  );
});

export default VeraceSilly;
