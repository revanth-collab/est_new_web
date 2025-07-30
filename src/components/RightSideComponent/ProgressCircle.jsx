// components/ProgressCircle.js
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ percentage }) => {
    return (
        <div style={{ width: 60, height: 60 }}>
            <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                    pathColor: "#6C5DD3",
                    trailColor: "#eee",
                })}
            >
                <div style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {percentage}%
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default ProgressCircle;
