import { TableLowcode } from 'alurkerja-ui'
import { useState } from 'react'

export const Dashboard = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any } | undefined>()
  const [search, setSearch] = useState<string>()

  return (
    <div className="bg-white p-6 h-screen w-screen">
      <TableLowcode
        baseUrl="https://nocodeapi.merapi.javan.id"
        specPath="/api/testing/crud/projects"
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}
