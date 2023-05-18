import { TableLowcode } from 'alurkerja-ui'
import { useState } from 'react'

function App() {
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 })
  const [renderState, setRenderState] = useState(0)
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>()
  const [search, setSearch] = useState<string>()

  return (
    <>
      <h1 className="font-bold">Alurkerja UI Starter</h1>
      <TableLowcode
        baseUrl="https://api-geekacademy.merapi.javan.id"
        tableName="article"
        module="article"
        renderState={renderState}
        setRenderState={setRenderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        search={search}
        setSearch={setSearch}
      />
    </>
  )
}

export default App
