import React from 'react';

export const iconData = {
  "id": "CycloWisdom",
  "name": "CycloWisdom",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.53 16.11 L 14.44 14.00 L 15.63 15.37 L 14.11 17.45 L 15.89 18.38 L 13.45 17.02 L 11.02 14.73 L 8.40 15.51 L 10.72 18.30 L 9.04 15.96 L 7.21 14.93 L 6.58 15.30 L 5.92 17.03 L 6.03 16.32 L 5.96 15.50 L 3.85 14.41 L 2.57 11.99 L 3.98 12.72 L 4.55 15.42 L 5.93 18.05 L 6.80 19.22 L 7.92 19.92 L 5.93 19.10 L 3.82 21.12"
      }
    ]
  ]
};

export const CycloWisdom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.53 16.11 L 14.44 14.00 L 15.63 15.37 L 14.11 17.45 L 15.89 18.38 L 13.45 17.02 L 11.02 14.73 L 8.40 15.51 L 10.72 18.30 L 9.04 15.96 L 7.21 14.93 L 6.58 15.30 L 5.92 17.03 L 6.03 16.32 L 5.96 15.50 L 3.85 14.41 L 2.57 11.99 L 3.98 12.72 L 4.55 15.42 L 5.93 18.05 L 6.80 19.22 L 7.92 19.92 L 5.93 19.10 L 3.82 21.12" />
      {children}
    </svg>
  );
});

export default CycloWisdom;
