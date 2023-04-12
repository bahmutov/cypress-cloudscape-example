import * as React from 'react'
import Select from '@cloudscape-design/components/select'

export default () => {
  const [selectedOption, setSelectedOption] = React.useState({
    label: 'Option 1',
    value: '1',
  })
  return (
    <Select
      selectedOption={selectedOption}
      onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
      ]}
      selectedAriaLabel="Selected"
    />
  )
}
