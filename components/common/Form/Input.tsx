import {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {FieldErrors, RegisterOptions} from 'react-hook-form'

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variant?: 'dark' | 'light'
  label: string
  name: string
  wrapperStyles?: string
  errors?: FieldErrors
  register?: any
  registerOptions?: RegisterOptions
}

const Input = ({
  variant = 'light',
  label,
  type = 'text',
  name,
  register,
  registerOptions,
  errors,
  wrapperStyles,
  className,
  required = false,
  ...rest
}: Props) => {
  return (
    <div role='input' className={`relative ${wrapperStyles} flex flex-col`}>
      <label
        className={`text-md md:text-base ${
          variant === 'light' ? 'text-offWhite' : 'text-black-dark'
        } mb-1`}
        htmlFor={name}
      >
        {label}
        <span
          className={`absolute top-0 ${
            variant === 'light' ? 'text-red-500' : 'text-red-400'
          }`}
        >
          {required && '*'}
        </span>
      </label>
      <input
        id={name}
        type={type}
        {...rest}
        className={`${className} py-2.5 px-3 ring-1 focus:ring-2 ${
          errors && errors[name] && errors[name]!.message
            ? `ring-red-400 ${
                variant === 'light'
                  ? 'bg-gray-main text-black-dark'
                  : 'bg-offWhite text-black-dark'
              }`
            : `${
                variant === 'light'
                  ? 'ring-gray-400 hover:ring-yellow-main focus:ring-yellow-main bg-gray-main text-black-dark'
                  : 'ring-gray-500 hover:ring-yellow-dark focus:ring-yellow-dark bg-offWhite text-black-dark'
              }`
        } rounded-lg transition ease-in outline-none`}
        {...register(name, registerOptions)}
      />
      {errors && errors[name] && errors[name]!.message && (
        <p className={`absolute -bottom-4 right-0 text-xs text-red-400`}>
          {errors[name]!.message as string}
        </p>
      )}
    </div>
  )
}

export default Input
