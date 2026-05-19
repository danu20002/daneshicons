import React from 'react';

export const iconData = {
  "id": "TutoreWind",
  "name": "TutoreWind",
  "category": "NZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.61 L 2.50 10.71 L 3.00 12.63 L 3.50 12.63 L 4.00 10.71 L 4.50 7.61 L 5.00 4.50 L 5.50 2.58 L 6.00 2.58 L 6.50 4.50 L 7.00 7.61 L 7.50 10.71 L 8.00 12.63 L 8.50 12.63 L 9.00 10.71 L 9.50 7.61 L 10.00 4.50 L 10.50 2.58 L 11.00 2.58 L 11.50 4.50 L 12.00 7.61 L 12.50 10.71 L 13.00 12.63 L 13.50 12.63 L 14.00 10.71 L 14.50 7.61 L 15.00 4.50 L 15.50 2.58 L 16.00 2.58 L 16.50 4.50 L 17.00 7.61 L 17.50 10.71 L 18.00 12.63 L 18.50 12.63 L 19.00 10.71 L 19.50 7.61 L 20.00 4.50 L 20.50 2.58 L 21.00 2.58 L 21.50 4.50 L 22.00 7.61"
      }
    ]
  ]
};

export const TutoreWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.61 L 2.50 10.71 L 3.00 12.63 L 3.50 12.63 L 4.00 10.71 L 4.50 7.61 L 5.00 4.50 L 5.50 2.58 L 6.00 2.58 L 6.50 4.50 L 7.00 7.61 L 7.50 10.71 L 8.00 12.63 L 8.50 12.63 L 9.00 10.71 L 9.50 7.61 L 10.00 4.50 L 10.50 2.58 L 11.00 2.58 L 11.50 4.50 L 12.00 7.61 L 12.50 10.71 L 13.00 12.63 L 13.50 12.63 L 14.00 10.71 L 14.50 7.61 L 15.00 4.50 L 15.50 2.58 L 16.00 2.58 L 16.50 4.50 L 17.00 7.61 L 17.50 10.71 L 18.00 12.63 L 18.50 12.63 L 19.00 10.71 L 19.50 7.61 L 20.00 4.50 L 20.50 2.58 L 21.00 2.58 L 21.50 4.50 L 22.00 7.61" />
      {children}
    </svg>
  );
});

export default TutoreWind;
