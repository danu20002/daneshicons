import React from 'react';

export const iconData = {
  id: "MessageSquareShare",
  name: "MessageSquareShare",
  category: "M",
  nodes: [["path",{"d":"M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4"}],["path",{"d":"M16 3h6v6"}],["path",{"d":"m16 9 6-6"}]]
};

export const MessageSquareShare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" />
      <path d="M16 3h6v6" />
      <path d="m16 9 6-6" />
      {children}
    </svg>
  );
});

export default MessageSquareShare;
