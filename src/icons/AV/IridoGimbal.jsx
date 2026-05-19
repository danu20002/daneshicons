import React from 'react';

export const iconData = {
  "id": "IridoGimbal",
  "name": "IridoGimbal",
  "category": "AV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.63 L 2.50 9.48 L 3.00 11.24 L 3.50 11.24 L 4.00 9.48 L 4.50 6.63 L 5.00 3.78 L 5.50 2.03 L 6.00 2.03 L 6.50 3.78 L 7.00 6.63 L 7.50 9.48 L 8.00 11.24 L 8.50 11.24 L 9.00 9.48 L 9.50 6.63 L 10.00 3.78 L 10.50 2.03 L 11.00 2.03 L 11.50 3.78 L 12.00 6.63 L 12.50 9.48 L 13.00 11.24 L 13.50 11.24 L 14.00 9.48 L 14.50 6.63 L 15.00 3.78 L 15.50 2.03 L 16.00 2.03 L 16.50 3.78 L 17.00 6.63 L 17.50 9.48 L 18.00 11.24 L 18.50 11.24 L 19.00 9.48 L 19.50 6.63 L 20.00 3.78 L 20.50 2.03 L 21.00 2.03 L 21.50 3.78 L 22.00 6.63"
      }
    ]
  ]
};

export const IridoGimbal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.63 L 2.50 9.48 L 3.00 11.24 L 3.50 11.24 L 4.00 9.48 L 4.50 6.63 L 5.00 3.78 L 5.50 2.03 L 6.00 2.03 L 6.50 3.78 L 7.00 6.63 L 7.50 9.48 L 8.00 11.24 L 8.50 11.24 L 9.00 9.48 L 9.50 6.63 L 10.00 3.78 L 10.50 2.03 L 11.00 2.03 L 11.50 3.78 L 12.00 6.63 L 12.50 9.48 L 13.00 11.24 L 13.50 11.24 L 14.00 9.48 L 14.50 6.63 L 15.00 3.78 L 15.50 2.03 L 16.00 2.03 L 16.50 3.78 L 17.00 6.63 L 17.50 9.48 L 18.00 11.24 L 18.50 11.24 L 19.00 9.48 L 19.50 6.63 L 20.00 3.78 L 20.50 2.03 L 21.00 2.03 L 21.50 3.78 L 22.00 6.63" />
      {children}
    </svg>
  );
});

export default IridoGimbal;
