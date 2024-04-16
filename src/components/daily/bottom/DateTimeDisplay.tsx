import { useState, useEffect } from "react";

function pad(num: number) {
    return num.toString().padStart(2, "0");
}
function getFormattedDateTime() {
    const now = new Date();
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function DateTimeDisplay() {
    const [currentDateTime, setCurrentDateTime] = useState<string>(
        getFormattedDateTime(),
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(getFormattedDateTime());
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="datetime-display my-auto text-gray-500 text-nowrap">
            live date-time: {currentDateTime}
        </div>
    );
}

export { DateTimeDisplay };

