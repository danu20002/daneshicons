import React from 'react';

export const iconData = {
  id: "CalendarSearch",
  name: "CalendarSearch",
  category: "C",
  nodes: [["path",{"d":"M16 2v4"}],["path",{"d":"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{"d":"m22 22-1.875-1.875"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}],["circle",{"cx":"18","cy":"18","r":"3"}]]
};

export const CalendarSearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 2v4" />
      <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
      <path d="m22 22-1.875-1.875" />
      <path d="M3 10h18" />
      <path d="M8 2v4" />
      <circle cx="18" cy="18" r="3" />
      {children}
    </svg>
  );
});

export default CalendarSearch;
