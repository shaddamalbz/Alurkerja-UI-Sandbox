import { FormLowcode } from 'alurkerja-ui'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import _ from 'underscore'

export const ReviewCreate = () => {
  const { formState, handleSubmit, control, setValue, watch } = useForm()
  const { id, task_id } = useParams()

  return (
    <section className="bg-white p-6">
      {id && task_id && (
        <FormLowcode
          id={id}
          isUsertask
          taskId={task_id}
          baseUrl={import.meta.env.VITE_API_BASEURL}
          specPath="/api/simple-a/review"
          formState={formState}
          handleSubmit={handleSubmit}
          control={control}
          setValue={setValue}
        />
      )}
    </section>
  )
}
