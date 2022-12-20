import {
  Children,
  createElement,
  DetailedHTMLProps,
  FormHTMLAttributes,
} from 'react'
import {useForm} from 'react-hook-form'

type Props = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  children: any
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: any) => void | Promise<void>
  defaultValues?: any
  shouldReset?: boolean
}

export default function Form({
  defaultValues,
  children,
  onSubmit,
  shouldReset = false,
  ...rest
}: Props) {
  const methods = useForm({defaultValues})
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: {errors},
  } = methods

  const onSubmitWithReset = (data: any) => {
    onSubmit(data)
    reset()
  }

  return (
    <form
      {...rest}
      onSubmit={handleSubmit(shouldReset ? onSubmitWithReset : onSubmit)}
    >
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                control,
                key: child.props.name,
              },
            })
          : child
      })}
    </form>
  )
}
