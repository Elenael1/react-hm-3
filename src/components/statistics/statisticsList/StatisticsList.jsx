import PropTypes from 'prop-types';
import { StaticsItem } from '../statisticsItem/StaticsItem';

export const StatisticsList = ({statistics}) => {
  return (
    <table>
        {statistics.map(({id, label, percentage}) => {
            return <StaticsItem key={id} label={label} percentage={percentage}/> 
        })}

    </table>
  )
}

StatisticsList.propTypes = {
    statistics: PropTypes.array
  };

