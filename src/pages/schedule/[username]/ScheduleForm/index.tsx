import { useState } from 'react'
import { CalendarStep } from './CalendarStep'

import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectDateTime, setSelectDateTime] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectDateTime(null)
  }

  if (selectDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }
  return <CalendarStep onSelectDateTime={setSelectDateTime} />
}
