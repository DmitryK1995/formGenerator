import Tag from '../tag';

export default function createLabel(forValue: string) {
  const value = forValue.charAt(0).toUpperCase() + forValue.slice(1);

  const labelProperties = {
    for: forValue,
  };

  return new Tag('label', labelProperties, value).toString();
}
