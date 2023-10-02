import React, { Component } from 'react'
import Swal from 'sweetalert2'

export class Dialog extends Component {
  static success = ({
    description,
    title,
    callback,
  }: {
    description: string
    title?: string
    callback?: () => void
  }) => {
    Swal.fire({
      title: title ?? 'Success',
      text: description,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      callback?.()
    })
  }
}
