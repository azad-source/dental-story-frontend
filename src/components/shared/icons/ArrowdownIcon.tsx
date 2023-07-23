import * as React from 'react';

interface Props {
    className?: string;
}

export const ArrowdownIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path
                d="M5.707 9.711a1 1 0 0 0 0 1.414l4.892 4.887a2 2 0 0 0 2.828-.001l4.89-4.89a1 1 0 0 0-1.414-1.414l-4.186 4.186a1 1 0 0 1-1.414 0L7.121 9.711a1 1 0 0 0-1.414 0z"
                fill="currentColor"
            />
        </svg>
    );
};
