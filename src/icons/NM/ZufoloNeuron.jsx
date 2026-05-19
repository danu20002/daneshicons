import React from 'react';

export const iconData = {
  "id": "ZufoloNeuron",
  "name": "ZufoloNeuron",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.82 20.53 L 4.16 22.07 L 3.52 21.53 L 4.29 23.00 L 3.40 23.00 L 2.99 22.40 L 5.13 22.99 L 7.42 20.42 L 8.22 20.98 L 8.49 22.10 L 9.40 20.59 L 10.27 22.68 L 11.09 23.00 L 9.17 23.00 L 8.74 20.56 L 9.52 21.55 L 7.13 21.12 L 8.66 18.58 L 7.42 17.54 L 9.15 20.43 L 7.66 20.14 L 9.73 17.21 L 8.01 15.50 L 6.32 12.53 L 7.14 13.12 L 10.00 10.43 L 9.08 11.66 L 7.72 9.23 L 9.72 11.22 L 10.60 10.29"
      }
    ]
  ]
};

export const ZufoloNeuron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.82 20.53 L 4.16 22.07 L 3.52 21.53 L 4.29 23.00 L 3.40 23.00 L 2.99 22.40 L 5.13 22.99 L 7.42 20.42 L 8.22 20.98 L 8.49 22.10 L 9.40 20.59 L 10.27 22.68 L 11.09 23.00 L 9.17 23.00 L 8.74 20.56 L 9.52 21.55 L 7.13 21.12 L 8.66 18.58 L 7.42 17.54 L 9.15 20.43 L 7.66 20.14 L 9.73 17.21 L 8.01 15.50 L 6.32 12.53 L 7.14 13.12 L 10.00 10.43 L 9.08 11.66 L 7.72 9.23 L 9.72 11.22 L 10.60 10.29" />
      {children}
    </svg>
  );
});

export default ZufoloNeuron;
