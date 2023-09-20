import { TableLowcode } from 'alurkerja-ui'
import { useState } from 'react'

export const Starter = () => {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()
  const [selectedRow, setSelectedRow] = useState<number[]>([])

  return (
    <section className="bg-white">
      <TableLowcode
        baseUrl={import.meta.env.VITE_API_BASEURL}
        tableName="category"
        module="category"
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
      />
    </section>
  )
}
