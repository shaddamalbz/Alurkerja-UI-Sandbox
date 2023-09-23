import React, { Fragment } from 'react'
import { Modal, Button } from 'alurkerja-ui'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UserTaskMapping } from 'alurkerja-ui/dist/types'

type IUserTaskButton = {
  availableTasks: any
  rowValue: any
  userTaskMapping: UserTaskMapping[]
}

export const UserTaskButton: React.FC<IUserTaskButton> = ({
  availableTasks,
  rowValue,
  userTaskMapping,
}) => {
  return (
    <Modal
      title={'User Tasks'}
      triggerButton={
        <Button
          type="button"
          className="text-gray-400 bg-gray-100"
          size="xs"
          icon={<FaPlay size={10} />}
        />
      }
    >
      {({ closeModal }) => (
        <Fragment>
          {availableTasks.map((task: any, idx: number) => {
            const taskMapping = userTaskMapping?.find(
              (spec) => spec.id === task.taskDefinitionKey
            )

            const businessKey = rowValue.id
            const url = taskMapping?.url
              ? `${taskMapping.url}/${businessKey}`
              : '#'

            return (
              <Link
                type="button"
                className="w-full px-4 py-2 text-left rounded hover:bg-gray-100"
                to={url.replace('/api', '') + '/task/' + task.id}
                key={idx}
              >
                {task.name}
              </Link>
            )
          })}
        </Fragment>
      )}
    </Modal>
  )
}
