import * as React from 'react';

interface Props {
    className?: string;
}

export const EditIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
            className={className}
            width="16"
            height="16"
        >
            <path
                fill="currentColor"
                d="M455.1 137.9l-32.4 32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7 0l56.3 56.4c6.8 6.8 6.8 17.9 0 24.7zm-270.7 271l-81-81.1 209.4-209.7 81 81.1-209.4 209.7zm-99.7-42l60.6 60.7-84.4 23.8 23.8-84.5zM484 84.3l-56.3-56.4c-11-11-50.7-31.8-82.4 0L60 313.4c-2.5 2.5-4.3 5.5-5.2 8.9l-43 153.1c-2 7.1.1 14.7 5.2 20 5.2 5.3 15.6 6.2 20 5.2l153-43.1c3.4-.9 6.4-2.7 8.9-5.2L484 166.8c22.7-22.7 22.7-59.7 0-82.5z"
            />
        </svg>
    );
};
