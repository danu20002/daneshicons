import React from 'react';

export const iconData = {
  "id": "YttriumYeast",
  "name": "YttriumYeast",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.27 14.77 L 18.08 4.66 L 9.86 8.81 L 4.83 6.83 L 15.94 3.54 L 2.40 11.96"
      }
    ],
    [
      "circle",
      {
        "cx": "10.27",
        "cy": "14.77",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "18.08",
        "cy": "4.66",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "9.86",
        "cy": "8.81",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "4.83",
        "cy": "6.83",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "15.94",
        "cy": "3.54",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "2.40",
        "cy": "11.96",
        "r": "0.97"
      }
    ]
  ]
};

export const YttriumYeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.27 14.77 L 18.08 4.66 L 9.86 8.81 L 4.83 6.83 L 15.94 3.54 L 2.40 11.96" />
      <circle cx="10.27" cy="14.77" r="1.08" />
      <circle cx="18.08" cy="4.66" r="0.57" />
      <circle cx="9.86" cy="8.81" r="0.76" />
      <circle cx="4.83" cy="6.83" r="1.30" />
      <circle cx="15.94" cy="3.54" r="0.89" />
      <circle cx="2.40" cy="11.96" r="0.97" />
      {children}
    </svg>
  );
});

export default YttriumYeast;
