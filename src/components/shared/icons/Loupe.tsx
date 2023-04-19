import * as React from 'react';

interface Props {
    className?: string;
}

export const Loupe: React.FC<Props> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="25pt"
            height="25pt"
            viewBox="0 0 50 50"
            fill="currentColor"
        >
            <g id="surface1">
                <path d="M 30.273438 18.554688 C 29.734375 18.554688 29.296875 18.992188 29.296875 19.53125 C 29.296875 20.070312 29.734375 20.507812 30.273438 20.507812 C 30.8125 20.507812 31.25 20.070312 31.25 19.53125 C 31.25 18.992188 30.8125 18.554688 30.273438 18.554688 Z M 30.273438 18.554688 " />
                <path d="M 48.855469 43.332031 L 35.820312 30.296875 C 37.945312 27.097656 39.0625 23.394531 39.0625 19.53125 C 39.0625 8.761719 30.300781 0 19.53125 0 C 8.761719 0 0 8.761719 0 19.53125 C 0 30.300781 8.761719 39.0625 19.53125 39.0625 C 23.394531 39.0625 27.097656 37.945312 30.296875 35.820312 L 33.898438 39.421875 C 33.898438 39.425781 33.902344 39.425781 33.902344 39.425781 L 43.332031 48.855469 C 44.070312 49.59375 45.050781 50 46.09375 50 C 47.136719 50 48.117188 49.59375 48.855469 48.855469 C 49.59375 48.117188 50 47.136719 50 46.09375 C 50 45.050781 49.59375 44.070312 48.855469 43.332031 Z M 29.835938 33.761719 C 26.824219 35.953125 23.257812 37.109375 19.53125 37.109375 C 9.839844 37.109375 1.953125 29.222656 1.953125 19.53125 C 1.953125 9.839844 9.839844 1.953125 19.53125 1.953125 C 29.222656 1.953125 37.109375 9.839844 37.109375 19.53125 C 37.109375 23.257812 35.953125 26.824219 33.761719 29.835938 C 32.667969 31.347656 31.347656 32.667969 29.835938 33.761719 Z M 31.886719 34.648438 C 32.898438 33.820312 33.820312 32.898438 34.648438 31.886719 L 37.417969 34.65625 C 36.574219 35.652344 35.652344 36.574219 34.65625 37.417969 Z M 47.472656 47.472656 C 47.105469 47.84375 46.613281 48.046875 46.09375 48.046875 C 45.574219 48.046875 45.082031 47.84375 44.714844 47.472656 L 36.042969 38.804688 C 37.03125 37.953125 37.953125 37.03125 38.804688 36.042969 L 47.476562 44.714844 C 47.84375 45.082031 48.046875 45.570312 48.046875 46.09375 C 48.046875 46.617188 47.84375 47.105469 47.472656 47.472656 Z M 47.472656 47.472656 " />
                <path d="M 19.53125 3.90625 C 10.914062 3.90625 3.90625 10.914062 3.90625 19.53125 C 3.90625 28.148438 10.914062 35.15625 19.53125 35.15625 C 28.148438 35.15625 35.15625 28.148438 35.15625 19.53125 C 35.15625 10.914062 28.148438 3.90625 19.53125 3.90625 Z M 19.53125 33.203125 C 11.992188 33.203125 5.859375 27.070312 5.859375 19.53125 C 5.859375 11.992188 11.992188 5.859375 19.53125 5.859375 C 27.070312 5.859375 33.203125 11.992188 33.203125 19.53125 C 33.203125 27.070312 27.070312 33.203125 19.53125 33.203125 Z M 19.53125 33.203125 " />
                <path d="M 30.476562 15.339844 C 29.632812 13.152344 28.171875 11.277344 26.242188 9.925781 C 24.265625 8.542969 21.945312 7.8125 19.53125 7.8125 C 18.992188 7.8125 18.554688 8.25 18.554688 8.789062 C 18.554688 9.328125 18.992188 9.765625 19.53125 9.765625 C 23.542969 9.765625 27.210938 12.285156 28.652344 16.039062 C 28.800781 16.429688 29.171875 16.667969 29.5625 16.667969 C 29.679688 16.667969 29.796875 16.644531 29.914062 16.601562 C 30.417969 16.40625 30.667969 15.84375 30.476562 15.339844 Z M 30.476562 15.339844 " />
            </g>
        </svg>
    );
};
