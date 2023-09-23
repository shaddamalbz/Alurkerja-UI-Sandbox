import { Button, TableLowcode } from 'alurkerja-ui'
import { UserTaskButton } from '@/components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ListSimpleA = () => {
  const navigate = useNavigate()

  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()
  const [selectedRow, setSelectedRow] = useState<number[]>([])

  return (
    <section className="bg-white">
      <TableLowcode
        baseUrl={import.meta.env.VITE_API_BASEURL}
        specPath="/api/simple-a"
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        customButtonBpmn={({ available_task, rowValue, usertaskMapping }) => (
          <UserTaskButton
            availableTasks={available_task}
            rowValue={rowValue}
            userTaskMapping={usertaskMapping}
          />
        )}
      />
    </section>
  )
}
