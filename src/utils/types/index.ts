export * from './loginResponseType'
export * from './UserType'

export type Pagination = {
  empty: boolean
  first: boolean
  last: boolean
  number: boolean
  number_of_element: boolean
  pageable: {
    offset: number
    paged: boolean
    unpaged: boolean
  }
  size: number
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  total_elements: number
  total_page: number
}

export interface ListResponse<T = any> {
  data: {
    content: Array<T>
  }
  status: number
  message: string
}
