import React from 'react';

export const iconData = {
  "id": "LevoThermal",
  "name": "LevoThermal",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.12 8.68 4.15 3.54 Q 5.41 4.85 6.66 6.17 Q 6.36 5.77 6.06 5.38 Q 7.78 4.36 9.49 3.34 Q 12.29 7.27 15.09 11.20 Q 16.21 15.88 17.33 20.56 Q 11.85 17.16 6.37 13.76 Q 6.23 13.79 6.09 13.82 Z"
      }
    ]
  ]
};

export const LevoThermal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.12 8.68 4.15 3.54 Q 5.41 4.85 6.66 6.17 Q 6.36 5.77 6.06 5.38 Q 7.78 4.36 9.49 3.34 Q 12.29 7.27 15.09 11.20 Q 16.21 15.88 17.33 20.56 Q 11.85 17.16 6.37 13.76 Q 6.23 13.79 6.09 13.82 Z" />
      {children}
    </svg>
  );
});

export default LevoThermal;
