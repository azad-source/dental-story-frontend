import * as React from 'react';

interface Props {
    className?: string;
}

export const CalendarIcon: React.FC<Props> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M7.75 2.5a.75.75 0 1 0-1.5 0v1.579c-1.439.115-2.384.398-3.078 1.092S2.195 6.811 2.079 8.25h19.841c-.115-1.439-.398-2.384-1.092-3.078s-1.639-.977-3.078-1.092V2.5a.75.75 0 1 0-1.5 0v1.513L14 4h-4l-2.25.013V2.5z" />
            <path
                fillRule="evenodd"
                d="M2 12l.013-2.25h19.974L22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2zm15 2a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm-4-5a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm0 4a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-6-3a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 1 0 0 2z"
            />
        </svg>
    );
};
