import PropTypes from 'prop-types';
import {
  Section,
  Title,
  DataList,
  DataItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { rendomColor } from '../../utils/randomColor';

export const Statistics = ({ data, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <DataList>
        {data.map(({ id, label, percentage }) => (
          <DataItem bgcolor={rendomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </DataItem>
        ))}
      </DataList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};