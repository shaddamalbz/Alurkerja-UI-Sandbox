import { TableLowcode } from 'alurkerja-ui'
import { useState } from 'react'
import { UserTaskButton } from '@/components'

export const ListSimpleBPage = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()
  const [selectedRow, setSelectedRow] = useState<number[]>([])

  return (
    <section className="bg-white">
      <TableLowcode
        baseUrl={import.meta.env.VITE_API_BASEURL}
        specPath="/api/simple-b"
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
