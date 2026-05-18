import React from 'react';

export const iconData = {
  id: "CalendarSync",
  name: "CalendarSync",
  category: "C",
  nodes: [["path",{"d":"M11 10v4h4"}],["path",{"d":"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{"d":"M16 2v4"}],["path",{"d":"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{"d":"M21 22v-4h-4"}],["path",{"d":"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{"d":"M3 10h4"}],["path",{"d":"M8 2v4"}]]
};

export const CalendarSync = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 10v4h4" />
      <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      <path d="M16 2v4" />
      <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
      <path d="M21 22v-4h-4" />
      <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
      <path d="M3 10h4" />
      <path d="M8 2v4" />
      {children}
    </svg>
  );
});

export default CalendarSync;
